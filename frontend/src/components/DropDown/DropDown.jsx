import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import ProfileIcon from '@/assets/images/profile-icon.svg';

import { flexMixin } from '@/styles/mixins';

import { UserContext } from '@/store/userStore';

export default function DropDown() {
    const [open, setOpen] = useState(false);

    const { authSignOut } = useContext(UserContext);
    const navigate = useNavigate();

    const toggleDropDownContent = () => {
        setOpen(prev => !prev);
    };

    const logoutHandler = () => {
        authSignOut();
        navigate(window.location.pathname);
    };

    return (
        <DropDownWrapper width="60px" height="60px">
            <DropDownMainButton onClick={toggleDropDownContent}>
                <img
                    src={ProfileIcon}
                    alt="profile"
                    width="100%"
                    height="100%"
                />
            </DropDownMainButton>
            {open ? (
                <DropDownContent>
                    <button type="button">닉네임 변경</button>
                    <button type="button" onClick={logoutHandler}>
                        로그아웃
                    </button>
                </DropDownContent>
            ) : null}
        </DropDownWrapper>
    );
}

const DropDownWrapper = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

const DropDownMainButton = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    cursor: pointer;
`;

const DropDownContent = styled.div`
    position: absolute;
    ${flexMixin('column', 'center', 'center')}
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;
