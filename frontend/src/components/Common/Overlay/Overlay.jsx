import React from 'react';
import styled, { css } from 'styled-components';

import { Box } from '@/components/Common';

export default function Overlay({
    onClick,
    backgroundColor = 'rgb(0, 0, 0, 0.5)',
}) {
    return (
        <StyledOverlay onClick={onClick} backgroundColor={backgroundColor} />
    );
}

const StyledOverlay = styled(Box)`
    width: 100%;
    height: 100%;
    position: absolute;
    ${({ backgroundColor }) =>
        css`
            background-color: ${backgroundColor};
        `}
    top: 0;
    left: 0;
    z-index: 1;
`;
