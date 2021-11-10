import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { sizeMixin, colorMixin, borderBoxMixin } from '@/styles/mixins';
import { ReactComponent as LeftArrow } from '@/assets/images/left-arrow.svg';
import { ReactComponent as RightArrow } from '@/assets/images/right-arrow.svg';

import LiveCard from './LiveCard';

function LiveSlider({ liveList }) {
    const [clickIdx, setClickIdx] = useState(0);
    const chunk1 = liveList.slice(0, 5);
    const chunk2 = liveList.slice(5, liveList.length);

    const handleArrowClick = () => {
        setClickIdx(prev => prev + 1);
    };

    const makeLiveCardChunk = chunk => {
        return chunk.map(liveItem => (
            <LiveCard key={liveItem.id} content={liveItem} />
        ));
    };

    return (
        <SliderScrollBlock>
            <LeftButton onClick={handleArrowClick}>
                <LeftArrow />
            </LeftButton>
            <SliderListWrapper>
                {clickIdx % 2 === 0
                    ? makeLiveCardChunk(chunk1)
                    : makeLiveCardChunk(chunk2)}
            </SliderListWrapper>
            <RightButton onClick={handleArrowClick}>
                <RightArrow />
            </RightButton>
        </SliderScrollBlock>
    );
}

const SliderScrollBlock = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 1.5em;
    z-index: 3;

    &:hover button {
        display: block;
    }

    & button {
        display: none;
    }
`;

const SliderListWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: visible;
    width: 100%;
    min-height: 13em;
`;

const HoverButton = css`
    position: absolute;
    top: 0;
    z-index: 3;
    align-items: center;
    cursor: pointer;
    ${sizeMixin('40px', '150px')}
    ${borderBoxMixin('1px', '0.25em 0px 0px 0.25em')}
    ${colorMixin('white', 'rgba(0, 0, 0, 0.5)')}
`;

const RightButton = styled.button`
    ${HoverButton}
    justify-content: flex-end;
    right: 0;
`;

const LeftButton = styled.button`
    ${HoverButton}
    justify-content: flex-start;
    left: 0;
`;

export default LiveSlider;
