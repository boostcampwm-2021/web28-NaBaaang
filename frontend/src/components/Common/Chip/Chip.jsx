import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@/assets/images/delete-icon.svg';
import { BUTTON_COLOR_TYPE } from '@/constants/css';

import { isFunction } from '@/util';

import { Box } from '@/components/Common';

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
            {text}
            {isFunction(onDelete) && <Icon src={DeleteIcon} />}
        </StyledChip>
    );
}

const StyledChip = styled(Box)`
    padding: 0.25rem 0.5rem;
    box-sizing: content-box;
    border-radius: 15px;
    ${({ color }) => BUTTON_COLOR_TYPE[color]};
    cursor: pointer;
    margin: 0.5rem;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 0.5rem;
`;
