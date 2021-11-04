import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '@/assets/images/header-logo.svg';
import { flexMixin } from '@/styles/mixins';

export default function Header() {
    return (
        <HeaderWrap>
            <Logo src={HeaderLogo} alt="header-logo" />
        </HeaderWrap>
    );
}

const HeaderWrap = styled.header`
    width: 100%;
    height: 100px;
    ${flexMixin('row', 'center', 'center')}
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 0 1em;
    box-sizing: border-box;
`;

const Logo = styled.img`
    height: 60px;
    margin-right: auto;
    cursor: pointer;
`;
