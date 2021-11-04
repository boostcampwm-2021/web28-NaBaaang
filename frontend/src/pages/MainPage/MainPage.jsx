import React from 'react';

import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';

import HeaderComponent from '@/components/Header';
import SideBarComponent from '@/components/SideBar';
import LiveCollection from '@/components/LiveCollection';
import Channel from '@/components/Channel/Channel';

import { flexMixin } from '@/styles/mixins';

function MainPage() {
    return (
        <MainLayout>
            <Header>
                <HeaderComponent />
            </Header>
            <Body>
                <SideBar>
                    <SideBarComponent />
                </SideBar>
                <MainSection>
                    <Switch>
                        <Route path="/" exact>
                            <LiveCollection />
                        </Route>
                        <Route path="/channel">
                            <Channel />
                        </Route>
                    </Switch>
                </MainSection>
            </Body>
        </MainLayout>
    );
}

const MainLayout = styled.main`
    ${flexMixin('column')}
`;

const Header = styled.header``;

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
