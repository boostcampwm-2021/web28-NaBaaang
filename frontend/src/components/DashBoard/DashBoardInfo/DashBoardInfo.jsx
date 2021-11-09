import React from 'react';
import styled from 'styled-components';

import Box from '@/components/Common/Box';
import Card from '@/components/Common/Card';
import Typography from '@/components/Common/Typography';
import Chip from '@/components/Common/Chip';

export default function DashBoardInfo({ title, description, category }) {
    const categoryList = category.map(text => (
        <Chip text={`#${text}`} color="success" />
    ));

    return (
        <Box
            height="100%"
            type="black"
            flexDirection="column"
            alignItems="space-between"
        >
            <Box flex={1}>
                <Typography variant="h5">{title}</Typography>
            </Box>
            <Box flex={4}>
                <StyledCard width="70%" height="70%">
                    <Typography variant="h5" color="black" align="center">
                        {description}
                    </Typography>
                </StyledCard>
            </Box>
            <Box flex={1} alignSelf="flex-end">
                {categoryList}
            </Box>
        </Box>
    );
}

const StyledCard = styled(Card)`
    color: black !important;
`;
