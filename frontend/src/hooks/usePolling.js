import { useState, useEffect } from 'react';
import HLS from 'hls.js/dist/hls';
import STATUS from '@/constants/statusCode';

export default function usePolling(url, option, videoRef, delay) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPolling();
    }, []);

    const fetchPolling = async prevEtag => {
        try {
            const response = await fetch(url, option);

            if (notExistHLSFile(response.status)) {
                waitCustomHLSPolling();
                return;
            }

            if (existHLSFile(response.status)) {
                const currEtag = response.headers.get('etag');

                if (fileNotChanged(prevEtag, currEtag)) {
                    waitCustomHLSPolling(currEtag);
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

    const waitCustomHLSPolling = (etag = null) => {
        setTimeout(() => {
            fetchPolling(etag);
        }, delay);
        setLoading(true);
    };

    const startHLSPolling = () => {
        if (HLS.isSupported()) {
            const hls = new HLS();

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
                hls.destroy();

                const response = await fetch(url, option);
                fetchPolling(response.headers.get('etag'));
            });
        });
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
