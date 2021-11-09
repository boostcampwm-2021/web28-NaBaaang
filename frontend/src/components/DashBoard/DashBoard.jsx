import React from 'react';
import styled from 'styled-components';

import Box from '@/components/Common/Box';
import DashBoardInfo from './DashBoardInfo';

export default function DashBoard({ info }) {
    return (
        <Box type="black" height="100%" alignItems="stretch">
            <Box flex={1.5} padding={1}>
                <DashBoardInfo info={info} />
            </Box>
            <StyledBox flex={3}>3</StyledBox>
            <Box flex={1}>1</Box>
        </Box>
    );
}

const StyledBox = styled(Box)`
    border-left: 0.5px solid ${({ theme }) => theme.color.gray1};
    border-right: 0.5px solid ${({ theme }) => theme.color.gray1};
`;
