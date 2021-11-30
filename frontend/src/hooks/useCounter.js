import { useState, useRef, useEffect } from 'react';

export default function useCounter({
    initCount = 0,
    delay = 1000,
    onStop = () => null,
}) {
    const [count, setCount] = useState(initCount);
    const intervalRef = useRef(null);

    const startCounter = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount(prev => prev - 1);
            }, delay);
        }
    };

    const stopCounter = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        onStop();
    };

    useEffect(() => {
        if (count === 0) {
            stopCounter();
        }
    }, [count]);

    return {
        count,
        startCounter,
        stopCounter,
    };
}
