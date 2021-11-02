import React from 'react';
import styled from 'styled-components';
import LiveCard from './LiveCard';

const SliderScrollBlock = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const SliderListWrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 15em;
    overflow-x: visible;
    flex-wrap: nowrap;
`;

const LiveSlider = ({ liveList }) => {
    return (
        <SliderScrollBlock>
            <SliderListWrapper>
                {liveList.map(liveItem => (
                    <LiveCard content={liveItem} />
                ))}
            </SliderListWrapper>
        </SliderScrollBlock>
    );
};

export default LiveSlider;
