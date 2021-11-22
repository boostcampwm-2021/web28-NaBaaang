import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';

storiesOf('Typography', module)
    .add('left', () => <Typography align="left">Hello World</Typography>)
    .add('center', () => <Typography align="center">Hello World</Typography>)
    .add('right', () => <Typography align="right">Hello World</Typography>)
    .add('h1', () => <Typography variant="h1">Hello World</Typography>)
    .add('h2', () => <Typography variant="h2">Hello World</Typography>)
    .add('h3', () => <Typography variant="h3">Hello World</Typography>)
    .add('h4', () => <Typography variant="h4">Hello World</Typography>)
    .add('h5', () => <Typography variant="h5">Hello World</Typography>)
    .add('h6', () => <Typography variant="h6">Hello World</Typography>)
    .add('p', () => <Typography variant="p">Hello World</Typography>)
    .add('span', () => <Typography variant="span">Hello World</Typography>)
    .add('margin', () => (
        <>
            <Typography variant="h3" marginBottom={1}>
                Hello World
            </Typography>
            <Typography variant="h3">Hello World</Typography>
        </>
    ));
