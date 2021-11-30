import { useEffect } from 'react';

export default function useDidMount(callback = () => null) {
    useEffect(() => {
        callback();
    }, []);
}
