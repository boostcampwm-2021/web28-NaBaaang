import React from 'react';

import styled from 'styled-components';

import { flexMixin } from '@/styles/mixins';

function MainPage() {
    return (
        <MainLayout>
            <Header>Header</Header>
            <Body>
                <SideBar>SideBar</SideBar>
                <MainSection>MainSection</MainSection>
            </Body>
        </MainLayout>
    );
}

const MainLayout = styled.main`
    ${flexMixin('column')}
`;

const Header = styled.header`
    height: 100px;
    ${({ theme }) => `background-color: ${theme.color.primary};`}
`;

const Body = styled.section`
    ${flexMixin('row')}
`;

const SideBar = styled.aside`
    width: 10%;
    ${({ theme }) => `background-color: ${theme.color.gray1};`}
`;

const MainSection = styled.section`
    width: 90%;
    ${({ theme }) => `background-color: ${theme.color.gray2};`}
`;

export default MainPage;
