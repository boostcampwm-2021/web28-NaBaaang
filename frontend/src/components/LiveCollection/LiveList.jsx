import React from 'react';
import styled from 'styled-components';

import LiveSlider from './LiveSlider';

function LiveList({ liveList }) {
    return (
        <LiveListWrapper>
            <LiveListHeader>{liveList[0].category}</LiveListHeader>
            <LiveSlider liveList={liveList} />
        </LiveListWrapper>
    );
}

const LiveListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.5rem;
`;

const LiveListHeader = styled.span`
    font-family: 'notoSansBold';
    color: ${({ theme }) => theme.color.black};
    font-size: 2em;
    font-weight: bold;
`;

export default LiveList;
