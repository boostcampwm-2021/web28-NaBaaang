import React from 'react';
import styled from 'styled-components';
import { BUTTON_SIZE_TYPE, BUTTON_COLOR_TYPE } from '@/constants/css';
import { transMarginProp } from '@/util';

import {Typography} from '@/components/Common';

export default function Button({ onClick, text, ...styleProps }) {
    return (
        <StyledButton onClick={onClick} {...styleProps}>
            <Typography variant="span" weight="medium">{text}</Typography>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    width: auto;
    ${({ size = 'small' }) => BUTTON_SIZE_TYPE[size]};
    ${({ color = 'light' }) => BUTTON_COLOR_TYPE[color]};
    border-radius: 5px;
    box-sizing: content-box;

    margin-top: ${({ marginTop = 0 }) => transMarginProp(marginTop)};
    margin-left: ${({ marginLeft = 0 }) => transMarginProp(marginLeft)};
    margin-bottom: ${({ marginBottom = 0 }) => transMarginProp(marginBottom)};
    margin-right: ${({ marginRight = 0 }) => transMarginProp(marginRight)};
`;

