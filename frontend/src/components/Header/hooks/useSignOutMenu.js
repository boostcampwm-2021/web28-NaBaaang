import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import STATUS from '@/constants/statusCode';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';
import { removeItemFromLocalStorage } from '@/util';
import { AUTH_TOKEN_LIST } from '@/constants/auth';
import { fetchCreateChannel, fetchChannelOwnedByUser } from '@/apis/channel';
import { fetchUpdateNickname } from '@/apis/user';
import {
    NicknameModalContent,
    ChannelDetailModalContent,
    ChannelModalContent,
} from '@/components/ModalContent';

export default function useSignOutMenu() {
    const { userInfo, dispatch } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);
    const { user } = userInfo;

    const navigate = useNavigate();

    const createChannel = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
            navigate(`/stream-manager/${channelID}`);
        } catch (err) {
            throw new Error(err);
        }
    };

    const openChannelModal = async () => {
        const { data: channelInfo, status } = await fetchChannelOwnedByUser(
            user.id,
        );

        if (status === STATUS.NO_CONTENT) {
            openModal(
                <ChannelModalContent
                    subHandleOnSubmit={createChannel}
                    successText="방송 시작"
                />,
            );
        } else if (status === STATUS.OK) {
            openModal(<ChannelDetailModalContent channelInfo={channelInfo} />);
        }
    };

    const changeNickname = async data => {
        try {
            const response = await fetchUpdateNickname({
                ...data,
                id: userInfo.user.id,
            });
            return response;
        } catch (err) {
            throw new Error(err);
        }
    };

    const openNicknameModal = () => {
        openModal(
            <NicknameModalContent
                userInfo={userInfo}
                dispatch={dispatch}
                onSubmit={changeNickname}
            />,
        );
    };

    const signOutHandler = () => {
        removeItemFromLocalStorage(AUTH_TOKEN_LIST);
        dispatch({ type: 'SIGN_OUT' });
        navigate(window.location.pathname);
    };

    return {
        openChannelModal,
        openNicknameModal,
        signOutHandler,
    };
}
