import React, { useContext, useEffect } from 'react';

import { go } from '@/util/fp';
import socket from '@/socket';

import { LoginErrorAlertModalContent } from '@/components/ModalContent';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';

import { useBuffer, useArray, useThrottle } from '@/hooks';

const THROTTLE_LIMIT = 50;
const BUFFER_LIMIT = 50;
const MESSAGE_LIMIT = 150;

export default function useChatMessage() {
    const { dispatch } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);
    const { arr: messageList, set: setMessageList } = useArray([]);
    const { isBufferFull, flushBuffer, getBufferList, pushBuffer } =
        useBuffer(BUFFER_LIMIT);

    const concatBufferToMessage = msg => msg.concat(getBufferList());
    const sliceMessage = msg => msg.slice(-MESSAGE_LIMIT);

    const handleMessageSetState = prevMsg => {
        return go(prevMsg, concatBufferToMessage, sliceMessage);
    };

    const updateMessage = () => {
        setMessageList(handleMessageSetState);
        flushBuffer();
    };

    const { startThrottle, stopThrottle } = useThrottle(
        updateMessage,
        THROTTLE_LIMIT,
    );

    const throttleNewMessage = msg => {
        pushBuffer(msg);

        if (isBufferFull()) {
            updateMessage();
            stopThrottle();
            return;
        }

        startThrottle();
    };

    const receiveNewMessage = msg => {
        const { status, errorSpec } = msg;
        if (status === false && errorSpec.code === 4002) {
            dispatch({ type: 'SIGN_OUT' });
            openModal(<LoginErrorAlertModalContent errCode={errorSpec.code} />);
        } else {
            pushBuffer(msg);

            if (isBufferFull()) {
                updateMessage();
                stopThrottle();
                return;
            }

            startThrottle();
        }
    };

    const getMessageIdxToRemove = unsentMessageList => {
        const toRemove = [];
        unsentMessageList.forEach(unsent => {
            const idxToRemove = messageList.findIndex(
                message => message.id === unsent.id && message.status,
            );
            toRemove.push(idxToRemove);
        });
        return toRemove;
    };

    const removeUnsentFromMessageList = toRemove => {
        return messageList.filter((_, idx) => !toRemove.includes(idx));
    };

    const filterUnsentMessage = () => {
        const unsentMessageList = messageList.filter(x => x.status === false);
        if (unsentMessageList.length) {
            return go(
                unsentMessageList,
                getMessageIdxToRemove,
                removeUnsentFromMessageList,
            );
        }
        return messageList;
    };

    const deleteMessage = id => () => {
        setMessageList(prev => prev.filter(x => x.id !== id));
    };

    useEffect(() => {
        socket.chat.onMessage(receiveNewMessage);
        return () => {
            socket.chat.clearChatEvents();
        };
    }, []);

    return {
        messageList,
        filterUnsentMessage,
        deleteMessage,
        throttleNewMessage,
    };
}
