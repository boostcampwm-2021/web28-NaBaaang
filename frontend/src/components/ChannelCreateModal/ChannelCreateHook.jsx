import { useRef } from 'react';

function useChannelCreateHook() {
    const titleRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const createChannel = () => {
        const title = titleRef.current.value;
        const category = categoryRef.current.value;
        const description = descriptionRef.current.value;

        console.log(title, category, description);

        // POST /api/channels/new 호출
        // 만들어진 채널로 route
    };

    return { titleRef, categoryRef, descriptionRef, createChannel };
}

export default useChannelCreateHook;
