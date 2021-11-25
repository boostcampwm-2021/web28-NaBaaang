import React from 'react';
// import styled, { css } from 'styled-components';
// import { sizeMixin, colorMixin, borderBoxMixin } from '@/styles/mixins';
// import { ReactComponent as LeftArrow } from '@/assets/images/left-arrow.svg';
// import { ReactComponent as RightArrow } from '@/assets/images/right-arrow.svg';

import { Slider, Box } from '@/components/Common';

import LiveCard from './LiveCard';
import SliderItem from '../Common/SliderItem/SliderItem';

const SLIDER_ITEM_SIZE = 5;

function LiveSlider({ liveList }) {
    const sliceChunk = chunk => {
        return chunk.reduce((prev, curr, idx) => {
            if (idx % SLIDER_ITEM_SIZE === 0) prev.push([]);
            prev[prev.length - 1].push(curr);
            return prev;
        }, []);
    };

    const makeLiveCardChunk = chunk => {
        const slicedChunkArr = sliceChunk(chunk);

        const sliderItems = slicedChunkArr.map(slicedChunk => {
            return (
                <SliderItem justifyContent="start">
                    {slicedChunk.map(item => {
                        return <LiveCard key={item.id} content={item} />;
                    })}
                </SliderItem>
            );
        });

        return sliderItems;
    };

    return (
        <Box width="100%" height="18.5rem">
            <Slider navigation>{makeLiveCardChunk(liveList)}</Slider>
        </Box>
    );
}

// const SliderScrollBlock = styled.div`
//     position: relative;
//     width: 100%;
//     overflow: hidden;
//     margin-top: 1.5em;
//     z-index: 3;

//     &:hover button {
//         display: block;
//     }

//     & button {
//         display: none;
//     }
// `;

// const SliderListWrapper = styled.div`
//     display: flex;
//     flex-wrap: nowrap;
//     overflow-x: visible;
//     width: 100%;
//     min-height: 13em;
// `;

// const HoverButton = css`
//     position: absolute;
//     top: 0;
//     z-index: 3;
//     align-items: center;
//     cursor: pointer;
//     ${sizeMixin('40px', '150px')}
//     ${borderBoxMixin('1px', '0.25em 0px 0px 0.25em')}
//     ${colorMixin('white', 'rgba(0, 0, 0, 0.5)')}
// `;

// const RightButton = styled.button`
//     ${HoverButton}
//     justify-content: flex-end;
//     right: 0;
// `;

// const LeftButton = styled.button`
//     ${HoverButton}
//     justify-content: flex-start;
//     left: 0;
// `;

export default LiveSlider;
