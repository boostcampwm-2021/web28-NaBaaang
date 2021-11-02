import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.li`
    min-height: 30px;
    margin: 30px;
`;

export default function Message({ nickname, content }) {
    return (
        <StyledMessage>
            <span>{nickname}</span>: <span>{content}</span>
        </StyledMessage>
    );
}
