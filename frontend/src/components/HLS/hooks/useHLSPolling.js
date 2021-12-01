import { useState, useEffect, useRef } from 'react';

import HLS from 'hls.js/dist/hls';
import STATUS from '@/constants/statusCode';
import fetchAction from '@/constants/fetchAction';
import { MEDIA_URL } from '@/constants/url';

export default function useHLSPolling(streamKey, videoRef, delay) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const customPollingRef = useRef(null);
    const hlsPollingRef = useRef(null);
    const url = `${MEDIA_URL}/${streamKey}.m3u8`;

    useEffect(() => {
        fetchPolling();
        return () => {
            if (customPollingRef.current) stopCustomHLSPolling();
            if (hlsPollingRef.current) stopHLSPolling();
        };
    }, []);

    const fetchPolling = async prevEtag => {
        try {
            const { status, headers } = await fetchAction({
                type: 'FETCH_READY_MEDIA',
                payload: streamKey,
            });

            if (notExistHLSFile(status)) {
                startCustomHLSPolling();
                return;
            }

            if (existHLSFile(status)) {
                const currEtag = headers.get('etag');

                if (fileNotChanged(prevEtag, currEtag)) {
                    startCustomHLSPolling(currEtag);
                    return;
                }

                startHLSPolling();
                return;
            }
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

                const { headers } = await fetchAction({
                    type: 'FETCH_READY_MEDIA',
                    payload: streamKey,
                });
                fetchPolling(headers.get('etag'));
            });
        });
    };

    const stopHLSPolling = () => {
        hlsPollingRef.current.destroy();
    };

    return {
        error,
        loading,
    };
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
