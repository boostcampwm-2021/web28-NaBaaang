import React from 'react';
import styled from 'styled-components';
import Box from '@/components/Common/Box';
import Typography from '@/components/Common/Typography';

export default function DashBoardTab({ text }) {
    return (
        <TabBox>
            <Typography color="#fff" variant="h5">
                {text}
            </Typography>
        </TabBox>
    );
}

const TabBox = styled(Box)`
    background-color: #5c5c5c;
    height: 40px;
`;
