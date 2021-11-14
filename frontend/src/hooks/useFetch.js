import { useState, useEffect } from 'react';
import fetchAction from '@/constants/fetchAction';

export default function useFetch({ type, payload }) {
    const { url, option } = fetchAction({ type, payload });

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, option);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading };
}
