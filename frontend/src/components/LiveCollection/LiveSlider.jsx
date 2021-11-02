import React from 'react';
import styled from 'styled-components';
import LiveCard from './LiveCard';

const SliderWrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 15em;
    overflow-x: visible;
    flex-wrap: nowrap;
`;

const LiveSlider = ({ liveList }) => {
    return (
        <SliderWrapper>
            {liveList.map(liveItem => (
                <LiveCard content={liveItem} />
            ))}
        </SliderWrapper>
    );
};

export default LiveSlider;
