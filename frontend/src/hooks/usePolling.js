import { useState, useEffect, useRef } from 'react';
import HLS from 'hls.js/dist/hls';
import STATUS from '@/constants/statusCode';

export default function usePolling(url, option, videoRef, delay) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const customPollingRef = useRef(null);
    const hlsPollingRef = useRef(null);

    useEffect(() => {
        fetchPolling();
        return () => {
            if (customPollingRef.current) stopCustomHLSPolling();
            if (hlsPollingRef.current) stopHLSPolling();
        };
    }, []);

    const fetchPolling = async prevEtag => {
        try {
            const response = await fetch(url, option);

            if (notExistHLSFile(response.status)) {
                startCustomHLSPolling();
                return;
            }

            if (existHLSFile(response.status)) {
                const currEtag = response.headers.get('etag');

                if (fileNotChanged(prevEtag, currEtag)) {
                    startCustomHLSPolling(currEtag);
                    return;
                }

                startHLSPolling();
                return;
            }

            // unhandled error
        } catch (err) {
            setError(true);
        }
    };

    const startCustomHLSPolling = (etag = null) => {
        customPollingRef.current = setTimeout(() => {
            fetchPolling(etag);
        }, delay);
        setLoading(true);
    };

    const stopCustomHLSPolling = () => {
        clearTimeout(customPollingRef.current);
    };

    const startHLSPolling = () => {
        if (HLS.isSupported()) {
            const hls = new HLS();
            hlsPollingRef.current = hls;

            hls.attachMedia(videoRef.current);
            registerHLSEvents(hls);

            setLoading(false);
        }
    };

    const registerHLSEvents = hls => {
        hls.on(HLS.Events.MEDIA_ATTACHED, () => {
            hls.loadSource(url);

            hls.on(HLS.Events.MANIFEST_PARSED, () => {
                videoRef.current.play();
            });
            hls.on(HLS.Events.ERROR, async () => {
                stopHLSPolling();

                const response = await fetch(url, option);
                fetchPolling(response.headers.get('etag'));
            });
        });
    };

    const stopHLSPolling = () => {
        hlsPollingRef.current.destroy();
    };

    return { error, loading };
}

const notExistHLSFile = responseStatus => {
    return responseStatus === STATUS.NO_CONTENT;
};

const existHLSFile = responseStatus => {
    return responseStatus === STATUS.OK;
};

const fileNotChanged = (prevEtag, currEtag) => {
    return prevEtag === currEtag;
};
