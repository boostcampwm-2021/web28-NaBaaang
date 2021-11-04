import React from 'react';

import styled from 'styled-components';

import SideBarComponent from '@/components/SideBar';
import LiveCollection from '@/components/LiveCollection';

import { flexMixin } from '@/styles/mixins';

function MainPage() {
    return (
        <MainLayout>
            <Header>Header</Header>
            <Body>
                <SideBar>
                    <SideBarComponent />
                </SideBar>
                <MainSection>
                    <LiveCollection />
                </MainSection>
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
    ${flexMixin('column', '', 'center')}
    width: 10%;
`;

const MainSection = styled.section`
    width: 90%;
`;

export default MainPage;
