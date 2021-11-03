import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@/components/Button';

storiesOf('Button', module)
    .add('default', () => <Button text="Click" />)
    .add('small', () => <Button text="Click" size="small" />)
    .add('medium', () => <Button text="Click" size="medium" />)
    .add('large', () => <Button text="Click" size="large" />)
    .add('error', () => <Button text="Click" color="error" />)
    .add('success', () => <Button text="Click" color="success" />);
