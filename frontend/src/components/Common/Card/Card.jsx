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
    backgroundColor = 'white',
    className,
}) {
    return (
        <StyeldBox
            className={className}
            width={width}
            height={height}
            flexDirection={flexDirection}
            jutifyContent={jutifyContent}
            alignItems={alignItems}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyeldBox>
    );
}

const StyeldBox = styled(Box)`
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
