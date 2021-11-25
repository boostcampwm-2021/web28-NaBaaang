import React, { useState, useEffect, useContext } from 'react';

import socket from '@/socket';
import { UserContext } from '@/store/userStore';
import { ModalContext } from '@/store/ModalStore';

import AlertModal from '@/components/AlertModal';

function isChannelOwner(streamerId, user) {
    if (!user) return false;
    return streamerId === user.id;
}

export default function useSocket(channel) {
    const [userCnt, setUserCnt] = useState(0);

    const { userInfo } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);
    const { user } = userInfo;

    const handleSocketEnded = () => {
        openModal(<AlertModal />);
    };

    useEffect(() => {
        if (!channel) return null;

        socket.channel.joinChannel({
            channelId: channel.id,
            chatId: channel.chat ? channel.chat.id : undefined,
            auth: isChannelOwner(channel.streamerId, user)
                ? 'streamer'
                : 'viewer',
        });
        socket.channel.channelUserCntChanged(setUserCnt);
        socket.channel.channelEnded(handleSocketEnded);
        return () => {
            socket.channel.clearChannelEvents();
        };
    }, [channel]);

    return { userCnt };
}
