import React from 'react';
import styled from 'styled-components';
import LiveSlider from './LiveSlider';

const LiveListContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5rem;
    margin-bottom: 1.5rem;
`;

const LiveListHeader = styled.span`
    color: #333333;
    font-size: 1.75em;
    font-weight: bold;
`;

const LiveList = ({ liveList }) => {
    return (
        <LiveListContainer>
            <LiveListHeader>{liveList[0].category}</LiveListHeader>
            <LiveSlider liveList={liveList} />
        </LiveListContainer>
    );
};

export default LiveList;
