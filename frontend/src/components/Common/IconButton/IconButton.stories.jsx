import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ReactComponent as LeftArrowIcon } from '@/assets/images/left-arrow.svg';

import IconButton from './IconButton';

storiesOf('IconButton', module)
    .add('small', () => (
        <IconButton size="small">
            <LeftArrowIcon />
        </IconButton>
    ))
    .add('medium', () => (
        <IconButton size="medium">
            <LeftArrowIcon />
        </IconButton>
    ))
    .add('light', () => (
        <IconButton color="light" size="large">
            <LeftArrowIcon />
        </IconButton>
    ))
    .add('success', () => (
        <IconButton color="success" size="large">
            <LeftArrowIcon />
        </IconButton>
    ))
    .add('error', () => (
        <IconButton color="error" size="large">
            <LeftArrowIcon />
        </IconButton>
    ))
    .add('large', () => (
        <IconButton size="large">
            <LeftArrowIcon />
        </IconButton>
    ))
    .add('onClick', () => (
        <IconButton size="small" onClick={action('onClick!!!')}>
            <LeftArrowIcon />
        </IconButton>
    ));
