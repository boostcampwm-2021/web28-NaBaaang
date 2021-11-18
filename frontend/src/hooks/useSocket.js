import { useEffect, useContext } from 'react';

import socket from '@/socket';
import { UserContext } from '@/store/userStore';

function isChannelOwner(streamerId, user) {
    if (!user) return false;
    return streamerId === user.id;
}

export default function useSocket(channel) {
    const { userInfo } = useContext(UserContext);
    const { user } = userInfo;

    useEffect(() => {
        if (!channel) return null;
        socket.channel.joinChannel({
            channelId: channel.id,
            chatId: channel.chat ? channel.chat.id : undefined,
            auth: isChannelOwner(channel.streamerId, user)
                ? 'streamer'
                : 'viewer',
        });
        return () => {
            socket.channel.clearChannelEvents();
        };
    }, [channel]);
}
