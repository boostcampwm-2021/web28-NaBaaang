import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './Login';

storiesOf('LoginModal', module).add('default', () => <Login open />);
