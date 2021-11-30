import { useEffect } from 'react';

export default function useWillUnmount(callback = () => null) {
    useEffect(() => {
        return () => callback();
    }, []);
}
