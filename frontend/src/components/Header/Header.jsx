import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '@/assets/images/header-logo.svg';
import { ReactComponent as CameraIcon } from '@/assets/images/camera-icon.svg';
import { flexMixin } from '@/styles/mixins';
import ProfileIcon from '@/assets/images/profile-icon.svg';

import { UserContext } from '@/store/userStore';
import { ModalContext } from '@/store/ModalStore';
import { Button, Box, IconButton } from '@/components/Common';
import { fetchCreateChannel } from '@/apis/channel';
import DropDown from '../DropDown';
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

    const handleOnCreateChannel = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
            navigate(`/stream-manager/${channelID}`);
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
                    onClick={() => handleModal(<LoginModal />)}
                />
            ) : (
                <IconBox>
                    <IconButton
                        size="large"
                        type="square"
                        onClick={() =>
                            handleModal(
                                <ChannelModal
                                    subHandleOnSubmit={handleOnCreateChannel}
                                    successText="방송 시작"
                                />,
                            )
                        }
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
                        contentPos={{ top: '4rem' }}
                    />
                </IconBox>
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

const IconBox = styled(Box)`
    button {
        &:not(:last-child) {
            margin: 0 0.25rem;
        }
        &:last-child {
            margin-left: 0.25rem;
        }
    }
`;
