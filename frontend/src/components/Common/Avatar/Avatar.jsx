import React from 'react';
import styled from 'styled-components';
import { sizeMixin } from '@/styles/mixins';

export default function Avatar({ src, size='small' }) {
    return <StyledAvatar src={src} size={size} />;
}

const AvatarSizeType = {
    small: sizeMixin('48px', '48px'),
    medium: sizeMixin('60px', '60px'),
    large: sizeMixin('72px', '72px'),
};

const StyledAvatar = styled.img`
    ${({ size }) => AvatarSizeType[size]}
    border-radius: 50%;
`;
