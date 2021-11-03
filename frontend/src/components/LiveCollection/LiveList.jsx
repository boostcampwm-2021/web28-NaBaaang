import React from 'react';
import styled from 'styled-components';

function LiveList({ liveList }) {
    return (
        <LiveListContainer>
            <LiveListHeader>{liveList[0].category}</LiveListHeader>
            {/* <LiveSlider liveList={liveList} /> */}
        </LiveListContainer>
    );
}

const LiveListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-left: 5rem;
    margin-bottom: 1.5rem;
`;

const LiveListHeader = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 1.75em;
    font-weight: bold;
`;

export default LiveList;
