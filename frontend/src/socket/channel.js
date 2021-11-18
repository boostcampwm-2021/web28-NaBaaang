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

    const channelEnded = ({ setAlertModal }) => {
        socket.on(EVENT_TYPE.TERMINATE_CHANNEL, () => {
            setAlertModal(true);
            leaveChannel();
        });
    };

    const clearChannelEvents = () => {
        socket.off(EVENT_TYPE.JOIN_CHANNEL);
        socket.off(EVENT_TYPE.LEAVE_CHANNEL);
        socket.off(EVENT_TYPE.TERMINATE_CHANNEL);
    };

    socket.on(EVENT_TYPE.JOIN_CHANNEL, msg => console.log(msg));
    socket.on(EVENT_TYPE.LEAVE_CHANNEL, msg => console.log(msg));

    return {
        joinChannel,
        leaveChannel,
        endChannel,
        channelEnded,
        clearChannelEvents,
    };
};

export default channel;
