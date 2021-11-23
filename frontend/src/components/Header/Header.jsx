import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '@/assets/images/header-logo.svg';
import CameraIcon from '@/assets/images/camera-icon.svg';
import { flexMixin } from '@/styles/mixins';
import ProfileIcon from '@/assets/images/profile-icon.svg';

import { ModalContext } from '@/store/ModalStore';
import Button from '@/components/Common/Button';
import Box from '@/components/Common/Box';
import DropDown from '@/components/DropDown';
import { UserContext } from '@/store/userStore';
import LoginModal from './LoginModal';
import ChannelModal from './ChannelModal';

export default function Header() {
    const { handleModal } = useContext(ModalContext);
    const { userInfo, authSignOut } = useContext(UserContext);

    const navigate = useNavigate();

    const changeNicknameHandler = () => {};

    const logoutHandler = () => {
        authSignOut();
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
        <HeaderWrap>
            <Link to="/">
                <Logo src={HeaderLogo} alt="header-logo" />
            </Link>

            {!userInfo.isSignIn ? (
                <Button
                    text="로그인"
                    size="medium"
                    onClick={() => handleModal(<LoginModal />)}
                />
            ) : (
                <Box>
                    <Logo
                        src={CameraIcon}
                        onClick={() => handleModal(<ChannelModal />)}
                    />
                    <DropDown
                        toggleButtonChild={<Logo src={ProfileIcon} />}
                        items={profileDropDownItems()}
                        contentPos={{ left: '-3.4rem', top: '4rem' }}
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
    height: 60px;
    cursor: pointer;
`;
