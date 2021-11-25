import React from 'react';
import styled from 'styled-components';

import { jumpWhen20, jumpWhen40, jumpWhen60 } from '@/styles/keyframes';

import { Box, Overlay } from '@/components/Common';

export default function Loading() {
    return (
        <BoxWrap>
            <Overlay />
            <Box>
                <Dot keyFrame={jumpWhen20} />
                <Dot keyFrame={jumpWhen40} />
                <Dot keyFrame={jumpWhen60} />
            </Box>
        </BoxWrap>
    );
}

const BoxWrap = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
`;

const Dot = styled(Box)`
    margin: 10px;
    width: 25px;
    height: 25px;
    background-color: ${({ theme: { color } }) => color.primary};
    border-radius: 50%;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-name: ${({ keyFrame }) => keyFrame};
    z-index: 1;
`;
