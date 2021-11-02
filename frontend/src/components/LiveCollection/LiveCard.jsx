import React from 'react';
import styled from 'styled-components';

const CardLayout = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 18.5em;
`;

const LiveCard = ({ content }) => {
    return <CardLayout>{content.title}</CardLayout>;
};

export default LiveCard;
