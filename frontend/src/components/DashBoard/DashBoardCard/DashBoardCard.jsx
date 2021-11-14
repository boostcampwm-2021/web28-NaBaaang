import React from 'react';
import styled from 'styled-components';

import Card from '@/components/Common/Card';
import Typography from '@/components/Common/Typography';

export default function DashBoardCard({ title, onClick }) {
    return (
        <StyledCard backgroundColor="black" onClick={onClick}>
            <Typography variant="h5" color="white">
                {title}
            </Typography>
        </StyledCard>
    );
}

const StyledCard = styled(Card)`
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color ease-in 200ms;
    &:hover {
        background-color: ${({ theme }) => theme.color.primary};
    }
`;
