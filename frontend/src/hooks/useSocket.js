import { useEffect, useContext } from 'react';

import socket from '@/socket';
import { UserContext } from '@/store/userStore';

function isChannelOwner(streamerId, userId) {
    return streamerId === userId;
}

export default function useSocket(channel) {
    const { userInfo } = useContext(UserContext);
    const { user } = userInfo;

    useEffect(() => {
        if (!channel) return null;
        socket.channel.joinChannel({
            channelId: channel.id,
            chatId: channel.chat.id,
            auth: isChannelOwner(channel.streamer_id, user.id)
                ? 'streamer'
                : 'viewer',
        });
        return () => {
            socket.channel.clearChannelEvents();
        };
    }, [channel]);
}
