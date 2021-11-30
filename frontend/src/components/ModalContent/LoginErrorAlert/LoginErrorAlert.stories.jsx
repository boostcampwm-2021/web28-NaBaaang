import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginErrorAlert from './LoginErrorAlert';

storiesOf('LoginErrorAlert', module).add('default', () => (
    <LoginErrorAlert errCode="4000" />
));
