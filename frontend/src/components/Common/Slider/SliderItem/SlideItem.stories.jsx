import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@/components/Common/Box';
import SliderItem from './SliderItem';

storiesOf('SliderItem', module)
    .add('default', () => (
        <>
            <SliderItem>1</SliderItem>
        </>
    ))
    .add('mutiple', () => (
        <Box justifyContent="unset" alignItems="unset">
            <SliderItem>1</SliderItem>
            <SliderItem>2</SliderItem>
        </Box>
    ));
