import React from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import { Box } from '@/components/Common';
import Header from '@/components/Header';

export default function Main() {
    return (
        <MainBox flexDirection="column" width="100%" height="100%">
            <HeaderBox flex={1} width="100%">
                <Header />
            </HeaderBox>

            <BodyBox flex={20} padding={1.5}>
                <AbsoluteBox width="100%" height="100%">
                    <Outlet />
                </AbsoluteBox>
            </BodyBox>
        </MainBox>
    );
}

const MainBox = styled(Box)`
    overflow: hidden;
`;

const HeaderBox = styled(Box)`
    box-sizing: content-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
`;

const BodyBox = styled(Box)`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const AbsoluteBox = styled(Box)`
    position: absolute;
    left: 0;
    top: 0;
    padding: inherit;
`;
