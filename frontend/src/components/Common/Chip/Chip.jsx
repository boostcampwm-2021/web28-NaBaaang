import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colorMixin } from '@/styles/mixins';
import DeleteIcon from '@/assets/images/delete-icon.svg';

import Box from '@/components/Common/Box';
import Typography from '../Typography';

export default function Chip({ onDelete, text, color, size = 'small' }) {
    const [isShow, setIsShow] = useState(true);

    const handleClick = () => {
        setIsShow(false);
        onDelete();
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
            {onDelete && <Icon src={DeleteIcon} />}
        </StyledChip>
    );
}

const ErrorColor = css`
    ${({ theme }) => colorMixin(theme.color.white, theme.color.red)}
`;

const SuccessColor = css`
    ${({ theme }) => colorMixin(theme.color.white, theme.color.primary)}
`;

const ChipColorType = {
    error: ErrorColor,
    success: SuccessColor,
};

const StyledChip = styled(Box)`
    height: 44px;
    padding: 6px 16px;
    font-size: 20px;
    ${({ color }) => ChipColorType[color]}
    border-radius: 15px;
    cursor: pointer;
    margin: 0.5rem;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 0.5rem;
`;
