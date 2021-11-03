import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '@/components/Card';

storiesOf('Card', module)
    .add('without props', () => <Card />)
    .add('with width props', () => <Card width="10px" />)
    .add('with height props', () => <Card height="10px" />)
    .add('with width,height props', () => <Card width="10px" height="10px" />);
