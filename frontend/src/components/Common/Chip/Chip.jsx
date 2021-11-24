import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import DeleteIcon from '@/assets/images/delete-icon.svg';

import { isFunction } from '@/util';

import { Box, Typography } from '@/components/Common';

export default function Chip({ onDelete = null, text, color, size = 'small' }) {
    const [isShow, setIsShow] = useState(true);

    const handleClick = () => {
        if (isFunction(onDelete)) {
            setIsShow(false);
            onDelete();
        }
    };

    if (!isShow) return null;

    return (
        <StyledChip
            width="max-content"
            onClick={handleClick}
            color={color}
            size={size}
        >
            <Typography variant="span">{text}</Typography>
            {isFunction(onDelete) && <Icon src={DeleteIcon} />}
        </StyledChip>
    );
}

const CHIP_COLOR_TYPE = {
    success: css`
        background-color: ${({ theme: { color } }) => color.primary};
    `,
    error: css`
        background-color: ${({ theme: { color } }) => color.red};
    `,
};

const StyledChip = styled(Box)`
    padding: 0.1rem 0.2rem;
    box-sizing: content-box;
    border-radius: 15px;
    ${({ color }) => CHIP_COLOR_TYPE[color]};
    cursor: pointer;
    margin: 0.5rem;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 0.5rem;
`;
