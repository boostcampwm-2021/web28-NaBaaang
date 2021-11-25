import React from 'react';
import { storiesOf } from '@storybook/react';

import {Box, SliderItem} from '@/components/Common';

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
