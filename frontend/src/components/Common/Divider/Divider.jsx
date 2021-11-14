import React from 'react';
import styled, { css } from 'styled-components';

export default function Divider({ direction = 'row' }) {
    return <StyledDivider direction={direction} />;
}

const DirectionSizeType = {
    row: css`
        width: 100%;
        height: 1px;
    `,
    column: css`
        height: 100%;
        width: 1px;
    `,
};

const StyledDivider = styled.div`
    ${({ direction }) => DirectionSizeType[direction]};
    background-color: #000;
`;
