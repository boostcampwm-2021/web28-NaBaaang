import React from 'react';
import styled from 'styled-components';

import LiveCard from './LiveCard';

function LiveSlider({ liveList }) {
    return (
        <SliderScrollBlock>
            <SliderListWrapper>
                {liveList.map(liveItem => (
                    <LiveCard content={liveItem} />
                ))}
            </SliderListWrapper>
        </SliderScrollBlock>
    );
}

const SliderScrollBlock = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 1.5em;
`;

const SliderListWrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 13em;
    overflow-x: visible;
    flex-wrap: nowrap;
    transform: translate3d(0em, 0px, 0px);
`;

export default LiveSlider;
