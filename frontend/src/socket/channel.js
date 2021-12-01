import { EVENT_TYPE } from '@/constants/socketEventType';

const channel = socket => {
    const joinChannel = ({ channelId, chatId, auth }) => {
        socket.emit(EVENT_TYPE.JOIN_CHANNEL, { channelId, chatId, auth });
    };

    const leaveChannel = () => {
        socket.emit(EVENT_TYPE.LEAVE_CHANNEL);
    };

    const endChannel = () => {
        socket.emit(EVENT_TYPE.TERMINATE_CHANNEL, '방송을 종료합니다');
    };

    const channelUserCntChanged = setState => {
        socket.on(EVENT_TYPE.CHANGE_USERCNT, clientCnt => setState(clientCnt));
    };

    const channelEnded = done => {
        socket.on(EVENT_TYPE.TERMINATE_CHANNEL, () => {
            leaveChannel();
            done();
        });
    };

    const clearChannelEvents = () => {
        socket.emit(EVENT_TYPE.LEAVE_CHANNEL);

        socket.off(EVENT_TYPE.JOIN_CHANNEL);
        socket.off(EVENT_TYPE.LEAVE_CHANNEL);
        socket.off(EVENT_TYPE.TERMINATE_CHANNEL);
    };

    return {
        joinChannel,
        leaveChannel,
        endChannel,
        channelUserCntChanged,
        channelEnded,
        clearChannelEvents,
    };
};

export default channel;
