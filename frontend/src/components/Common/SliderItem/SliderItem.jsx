import React from 'react';
import styled from 'styled-components';
import Box from '@/components/Common/Box';

export default function SliderItem({
    children,
    padding = 0,
    flexDirection,
    alignItems = 'stretch',
    justifyContent,
}) {
    return (
        <SliderItemBox
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            padding={padding}
        >
            {children}
        </SliderItemBox>
    );
}

const SliderItemBox = styled(Box)`
    width: 100%;
    flex-shrink: 0;
`;
