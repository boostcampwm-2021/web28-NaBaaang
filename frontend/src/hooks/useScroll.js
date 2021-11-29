import {useRef} from 'react';

const SCROLL_DIFF_BOUNDARY = 2;

export default function useScroll() {
    const scrollRef = useRef()

    const isScrollBottom = () => {
        const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
        const scrollDiff = scrollHeight - scrollTop;

        return (
            scrollDiff >= clientHeight - SCROLL_DIFF_BOUNDARY &&
            scrollDiff <= clientHeight + SCROLL_DIFF_BOUNDARY
        );
    };

    const moveScrollToBottom = () => {
        const { scrollHeight } = scrollRef.current;
        scrollRef.current.scrollTop = scrollHeight;
    };

    return { scrollRef, isScrollBottom, moveScrollToBottom };
}
