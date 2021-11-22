import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@/components/Common/Box';
import Slider from './Slider';
import SliderItem from '../SliderItem';

const TestComponent = (navigation = false) => (
    <Box width="300px" height="300px" alignItems="stretch">
        <Slider navigation={navigation}>
            <SliderItem>1</SliderItem>
            <SliderItem>2</SliderItem>
        </Slider>
    </Box>
);

storiesOf('Slider', module)
    .add('default', () => TestComponent(false))
    .add('navigation', () => TestComponent(true));
