import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Box from '@/components/Common/Box';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import LiveCollection from '@/components/LiveCollection';
import Channel from '@/components/Channel/Channel';
import SocketTest from '@/components/Socket/SocketTest';

function MainPage() {
    return (
        <MainBox flexDirection="column" width="100%" height="100%">
            {/* 첫 번쨰 row */}
            <Box flex={0.5} width="100%" >
                <Header />
            </Box>

            {/* 두 번째 row */}
            <Box flex={10} width="100%">
                <Box flex={2} height="100%">
                    <SideBar/>
                </Box>
                <BodyBox flex={40} height="100%">
                        <AbsoluteBox width="100%" height="100%">
                            <Switch>
                                <Route path="/" exact component={LiveCollection} />
                                <Route path="/channel" component={Channel} />
                                <Route path="/socket" component={SocketTest} />
                            </Switch>
                        </AbsoluteBox>
                        
                </BodyBox>
            </Box>
        </MainBox>
    );
}

const MainBox = styled(Box)`
    overflow : hidden;
`

const BodyBox = styled(Box)`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const AbsoluteBox = styled(Box)`
    position: absolute;
    left: 0;
    top: 0;
`

export default MainPage;
