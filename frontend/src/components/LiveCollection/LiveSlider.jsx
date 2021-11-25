import React from 'react';

import { v1 } from 'uuid';
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
                <SliderItem key={v1()} justifyContent="start">
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

export default LiveSlider;
