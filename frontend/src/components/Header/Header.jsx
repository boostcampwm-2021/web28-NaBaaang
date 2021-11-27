import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '@/assets/images/header-logo.svg';
import { ReactComponent as CameraIcon } from '@/assets/images/camera-icon.svg';
import { flexMixin } from '@/styles/mixins';
import ProfileIcon from '@/assets/images/profile-icon.svg';
import STATUS from '@/constants/statusCode';

import { UserContext } from '@/store/userStore';
import { ModalContext } from '@/store/ModalStore';
import { Button, Box, IconButton, DropDown } from '@/components/Common';
import { fetchCreateChannel, fetchChannelOwnedByUser } from '@/apis/channel';
import { fetchUpdateNickname } from '@/apis/user';
import {
    NicknameModalContent,
    ChannelDetailModalContent,
    LoginModalContent,
    ChannelModalContent,
} from '@/components/ModalContent';

export default function Header() {
    const { handleModal, openModal } = useContext(ModalContext);
    const { setUserInfo, userInfo, authSignOut } = useContext(UserContext);

    const navigate = useNavigate();

    const changeNicknameHandler = () => {
        handleModal(
            <NicknameModalContent
                onSubmit={handleOnChangeNickname}
                setUserInfo={setUserInfo}
                userInfo={userInfo}
            />,
        );
    };

    const logoutHandler = () => {
        authSignOut();
        navigate(window.location.pathname);
    };

    const handleOnClickCameraIcon = async () => {
        const { user } = userInfo;
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

    const handleOnCreateChannel = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
            navigate(`/stream-manager/${channelID}`);
        } catch (err) {
            throw new Error(err);
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
        <HeaderWrap>
            <Link to="/">
                <Logo src={HeaderLogo} alt="header-logo" />
            </Link>

            {!userInfo.isSignIn ? (
                <Button
                    text="로그인"
                    size="medium"
                    onClick={() => handleModal(<LoginModalContent />)}
                />
            ) : (
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
                                <Logo src={ProfileIcon} />
                            </IconButton>
                        }
                        items={profileDropDownItems()}
                        contentPos={{ top: '4rem', right: '0' }}
                    />
                </Box>
            )}
        </HeaderWrap>
    );
}

const HeaderWrap = styled.header`
    width: 100%;
    height: 100%;
    z-index: ${({ theme }) => theme.zIndex.header};
    ${flexMixin('row', 'space-between', 'center')}
    background-color: ${({ theme }) => theme.color.white};
    padding: 0 1em;
    box-sizing: border-box;
`;

const Logo = styled.img`
    height: 35px;
    cursor: pointer;
`;
