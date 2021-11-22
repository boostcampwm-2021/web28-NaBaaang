import React from 'react';
import styled from 'styled-components';
import Box from '@/components/Common/Box';

export default function SliderItem({ children }) {
    return <SliderItemBox>{children}</SliderItemBox>;
}

const SliderItemBox = styled(Box)`
    width: 100%;
    flex-shrink: 0;
`;
