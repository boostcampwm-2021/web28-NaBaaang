import { useState, useEffect } from 'react';
import fetchAction from '@/constants/fetchAction';
import STATUS from '@/constants/statusCode';

export default function useFetch({ type, payload }) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data, status } = await fetchAction({ type, payload });
            if (status !== STATUS.NO_CONTENT) {
                setData(data);
            }
            setLoading(false);
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
        return () => {
            setLoading(false);
            setError(false);
        };
    }, []);

    return { data, fetchData, error, loading };
}
