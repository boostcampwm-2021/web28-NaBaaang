import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { flexMixin } from '@/styles/mixins';
import Box from './Box';

const BoxWrap = () => {
    const FlexBoxWrap = styled.div`
        width: 500px;
        height: 500px;
        ${flexMixin('row', 'center', 'center')}
        border: 1px solid black;
    `;

    return (
        <FlexBoxWrap>
            <Box isBolder alignSelf="flex-start" flex={1}>
                1
            </Box>
            <Box isBolder alignSelf="flex-end" flex={2}>
                2
            </Box>
        </FlexBoxWrap>
    );
};

storiesOf('Box', module)
    .add('default', () => <Box width="100px" height="100px" />)

    .add('children', () => (
        <Box width="100px" height="100px">
            HelloWorld
        </Box>
    ))
    .add('justify start', () => <Box justifyContent="flex-start">Hello</Box>)
    .add('align start', () => <Box alignItems="flex-start">Hello</Box>)
    .add('flex item', () => <BoxWrap />);
