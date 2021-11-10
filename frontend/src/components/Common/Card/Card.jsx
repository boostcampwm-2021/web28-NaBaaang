import React from 'react';
import styled from 'styled-components';
import Box from '@/components/Common/Box';

export default function Card({
    width,
    height,
    children,
    flexDirection,
    jutifyContent,
    alignItems,
}) {
    return (
        <StyeldBox
            width={width}
            height={height}
            flexDirection={flexDirection}
            jutifyContent={jutifyContent}
            alignItems={alignItems}
        >
            {children}
        </StyeldBox>
    );
}

const StyeldBox = styled(Box)`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
