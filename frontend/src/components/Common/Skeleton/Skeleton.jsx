import React from 'react';
import styled, { css } from 'styled-components';
import { sizeMixin } from '@/styles/mixins';
import { skeletonGradient } from '@/styles/keyframes';
import { Box } from '@/components/Common';

export default function Skeleton({
    width = '100%',
    height = '20px',
    variant = 'rectangle',
}) {
    return <SkeletonBox width={width} height={height} variant={variant} />;
}

const VARIANT_TYPE = {
    rectangle: css`
        border-radius: 10px;
    `,
    circle: css`
        border-radius: 50%;
    `,
};

const SkeletonBox = styled(Box)`
    ${({ width, height }) => sizeMixin(`${width}px`, `${height}px`)};
    ${({ variant }) => VARIANT_TYPE[variant]};
    background-color: ${({ theme }) => theme.color.gray2};
    animation: ${skeletonGradient} 1.5s infinite ease-in;
`;
