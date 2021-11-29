import React, { useContext } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import HeaderLogo from '@/assets/images/header-logo.svg';
import { flexMixin } from '@/styles/mixins';

import { UserContext } from '@/store/UserStore';

import SignInMenu from './SignInMenu';
import SignOutMenu from './SignOutMenu';

export default function Header() {
    const {
        userInfo: { isSignIn },
    } = useContext(UserContext);

    return (
        <HeaderWrap>
            <Link to="/">
                <Logo src={HeaderLogo} alt="header_logo" />
            </Link>
            {!isSignIn ? <SignInMenu /> : <SignOutMenu />}
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
