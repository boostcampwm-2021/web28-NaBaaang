import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Box from '@/components/Common/Box';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import LiveCollection from '@/components/LiveCollection';
import Channel from '@/components/Channel/Channel';

function MainPage() {
    return (
        <Box width="100%" height="100%">
            <Header />
            <SideBar />
            <BodyBox flex={1}>
                <Switch>
                    <Route path="/" exact component={LiveCollection} />
                    <Route path="/channel" component={Channel} />
                </Switch>
            </BodyBox>
        </Box>
    );
}

const BodyBox = styled(Box)`
    width: 100%;
    height: 100%;
    padding-top: ${({ theme }) => theme.size.headerHeight};
    padding-left: ${({ theme }) => theme.size.sidebarWidth}
`;

export default MainPage;
