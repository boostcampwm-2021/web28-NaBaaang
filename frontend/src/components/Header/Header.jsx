import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '@/assets/images/header-logo.svg';
import CameraIcon from '@/assets/images/camera-icon.svg';
import ProfileIcon from '@/assets/images/profile-icon.svg';
import { flexMixin } from '@/styles/mixins';

import Button from '@/components/Common/Button';
import Box from '@/components/Common/Box';
import { UserContext } from '@/store/userStore';
import LoginModal from './LoginModal';
import ChannelModal from './ChannelModal';

export default function Header() {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openChannelModal, setChannelModal] = useState(false);
    const { userInfo, authSignOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handleOpenModal = handler => {
        handler(true);
    };

    const handleHideModal = handler => {
        handler(false);
    };

    const logoutHandler = () => {
        authSignOut();
        navigate(window.location.pathname);
    };

    return (
        <HeaderWrap>
            <LoginModal
                open={openLoginModal}
                onClose={() => handleHideModal(setOpenLoginModal)}
            />
            <ChannelModal
                open={openChannelModal}
                onClose={() => handleHideModal(setChannelModal)}
            />

            <Link to="/">
                <Logo src={HeaderLogo} alt="header-logo" />
            </Link>

            {!userInfo.isSignIn ? (
                <Button
                    text="로그인"
                    size="medium"
                    onClick={() => handleOpenModal(setOpenLoginModal)}
                />
            ) : (
                <Box>
                    <Logo
                        src={CameraIcon}
                        onClick={() => handleOpenModal(setChannelModal)}
                    />
                    <Logo src={ProfileIcon} />
                    <Button
                        text="로그아웃"
                        size="medium"
                        onClick={logoutHandler}
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
    padding: 0 1em;
    box-sizing: border-box;
`;

const Logo = styled.img`
    height: 60px;
    cursor: pointer;
`;
