import { useRef } from 'react';

export default function useThrottle(cb, limit) {
    const timeRef = useRef(0);
    const blockRef = useRef(false);

    const isBlock = () => {
        return blockRef.current === true;
    };

    const setBlockRef = state => {
        blockRef.current = state;
    };

    const startThrottle = () => {
        if (!isBlock()) {
            setBlockRef(true);
            timeRef.current = setTimeout(() => {
                setBlockRef(false);
                cb();
            }, limit);
        }
    };

    const stopThrottle = () => {
        setBlockRef(false);
        clearTimeout(timeRef.current);
    };

    return { startThrottle, stopThrottle };
}
