import { useRef } from 'react';

export default function useThrottle(cb, limit, cond = false) {
    const timeRef = useRef(0);
    const blockRef = useRef(false);

    const isBlock = () => {
        return blockRef.current === true;
    };
    const setBlockRef = state => {
        blockRef.current = state;
    };

    return () => {
        if (!isBlock()) {
            setBlockRef(true);
            timeRef.current = setTimeout(() => {
                setBlockRef(false);
                cb();
            }, limit);
        }

        if (cond && cond()) {
            setBlockRef(false);
            clearTimeout(timeRef.current);
            cb();
        }
    };
}
