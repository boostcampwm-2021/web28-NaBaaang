import { useState, useEffect } from 'react';

export default function useFetch(url, option) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, option);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (err) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading };
}
