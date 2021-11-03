import { useState, useEffect } from 'react';

function useHover(ref) {
    const [isHovered, setHover] = useState(false);

    const mouseoverHandler = () => {
        setHover(true);
    };
    const mouseoutHandler = () => {
        setHover(false);
    };
    useEffect(() => {
        const target = ref.current;
        if (target) {
            target.addEventListener('mouseenter', mouseoverHandler);
            target.addEventListener('mouseleave', mouseoutHandler);
        }
        return () => {
            target.removeEventListener('mouseenter', mouseoverHandler);
            target.removeEventListener('mouseleave', mouseoutHandler);
        };
    });

    return isHovered;
}

export default useHover;
