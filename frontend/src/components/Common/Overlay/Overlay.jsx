import React from 'react';
import styled from 'styled-components';

import {Box} from '@/components/Common';

export default function Overlay({ onClick }) {
    return <StyledOverlay onClick={onClick} />;
}

const StyledOverlay = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.8);
    z-index: 1;
`;
