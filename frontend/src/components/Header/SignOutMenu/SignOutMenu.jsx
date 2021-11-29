import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import STATUS from '@/constants/statusCode';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';
import { removeItemFromLocalStorage } from '@/util';
import { AUTH_TOKEN_LIST } from '@/constants/auth';
import { ReactComponent as CameraIcon } from '@/assets/images/camera-icon.svg';
import { ReactComponent as ProfileIcon } from '@/assets/images/profile-icon.svg';

import { fetchCreateChannel, fetchChannelOwnedByUser } from '@/apis/channel';
import { fetchUpdateNickname } from '@/apis/user';
import { Box, IconButton, DropDown } from '@/components/Common';
import {
    NicknameModalContent,
    ChannelDetailModalContent,
    ChannelModalContent,
} from '@/components/ModalContent';

export default function SignOutMenu() {
    const { userInfo, dispatch } = useContext(UserContext);
    const { openModal, handleModal } = useContext(ModalContext);
    const { user } = userInfo;

    const navigate = useNavigate();

    const handleOnCreateChannel = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
            navigate(`/stream-manager/${channelID}`);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleOnClickCameraIcon = async () => {
        const { data: channelInfo, status } = await fetchChannelOwnedByUser(
            user.id,
        );

        if (status === STATUS.NO_CONTENT) {
            openModal(
                <ChannelModalContent
                    subHandleOnSubmit={handleOnCreateChannel}
                    successText="방송 시작"
                />,
            );
        } else if (status === STATUS.OK) {
            openModal(<ChannelDetailModalContent channelInfo={channelInfo} />);
        }
    };

    const handleOnChangeNickname = async data => {
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

    const changeNicknameHandler = () => {
        handleModal(
            <NicknameModalContent
                userInfo={userInfo}
                dispatch={dispatch}
                onSubmit={handleOnChangeNickname}
            />,
        );
    };

    const logoutHandler = () => {
        removeItemFromLocalStorage(AUTH_TOKEN_LIST);
        dispatch({ type: 'SIGN_OUT' });
        navigate(window.location.pathname);
    };

    const profileDropDownItems = () => {
        const items = [
            ['닉네임 변경', changeNicknameHandler],
            ['로그아웃', logoutHandler],
        ];

        const dropDownItems = items.map(([text, handler]) => {
            return { text, handler };
        });

        return dropDownItems;
    };

    return (
        <Box>
            <IconButton
                size="large"
                type="square"
                onClick={handleOnClickCameraIcon}
            >
                <CameraIcon />
            </IconButton>

            <DropDown
                toggleButtonChild={
                    <IconButton type="square" size="large">
                        <ProfileIcon />
                    </IconButton>
                }
                items={profileDropDownItems()}
                contentPos={{ top: '4rem', right: '0' }}
            />
        </Box>
    );
}
