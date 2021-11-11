import { useState, useEffect } from 'react';
import HLS from 'hls.js/dist/hls';

export default function usePolling(url, option, videoRef, delay) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchPolling = async prevEtag => {
        setLoading(true);
        try {
            const response = await fetch(url, option);
            if (response.status === 204) {
                setTimeout(() => {
                    fetchPolling();
                }, delay);
                setLoading(true);
            } else if (response.status === 200) {
                const currEtag = response.headers.get('etag');
                if (prevEtag === currEtag) {
                    setTimeout(() => {
                        fetchPolling(currEtag);
                    }, delay);
                    return;
                }
                if (HLS.isSupported()) {
                    const hls = new HLS();

                    hls.attachMedia(videoRef.current);

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
                }
                setLoading(false);
            }
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchPolling();
    }, []);

    return { error, loading };
}
