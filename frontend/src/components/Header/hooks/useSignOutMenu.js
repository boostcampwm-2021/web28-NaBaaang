import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import STATUS from '@/constants/statusCode';
import fetchAction from '@/constants/fetchAction';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';
import { fetchChannelOwnedByUser } from '@/apis/channel';
import {
    NicknameModalContent,
    ChannelDetailModalContent,
    ChannelModalContent,
    LoginErrorAlertModalContent,
} from '@/components/ModalContent';

export default function useSignOutMenu() {
    const { userInfo, dispatch } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);
    const { user } = userInfo;

    const navigate = useNavigate();

    const createChannel = async formData => {
        try {
            const { status, data } = await fetchAction({
                type: 'FETCH_CREATE_CHANNEL',
                payload: formData,
            });

            if (status === STATUS.CREATED) {
                navigate(`/stream-manager/${data}`);
            } else {
                const {
                    errorSpec: { code },
                } = data;
                dispatch({
                    type: 'SIGN_OUT',
                });
                openModal(<LoginErrorAlertModalContent errCode={code} />);
            }
        } catch (err) {
            throw new Error(err);
        }
    };

    const openChannelModal = async () => {
        const { data, status } = await fetchChannelOwnedByUser(user.id);

        if (status === STATUS.NO_CONTENT) {
            openModal(
                <ChannelModalContent
                    subHandleOnSubmit={createChannel}
                    successText="방송 시작"
                />,
            );
        } else if (status === STATUS.OK) {
            openModal(<ChannelDetailModalContent channelInfo={data} />);
        }
    };

    const changeNickname = async nickname => {
        try {
            const { status, data } = await fetchAction({
                type: 'FETCH_UPDATE_NICKNAME',
                payload: {
                    nickname,
                    id: userInfo.user.id,
                },
            });
            return {
                status,
                data,
            };
        } catch (err) {
            throw new Error(err);
        }
    };

    const openNicknameModal = () => {
        openModal(
            <NicknameModalContent
                dispatch={dispatch}
                onSubmit={changeNickname}
            />,
        );
    };

    const signOutHandler = () => {
        dispatch({
            type: 'SIGN_OUT',
        });
        navigate(window.location.pathname);
    };

    return {
        openChannelModal,
        openNicknameModal,
        signOutHandler,
    };
}
