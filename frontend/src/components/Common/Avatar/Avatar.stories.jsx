import React from 'react';
import { storiesOf } from '@storybook/react';
import tempImage from '@/assets/images/kukucorn.jpg';

import Avatar from './Avatar';

storiesOf('Avatar', module)
    .add('small', () => <Avatar src={tempImage} size="small" />)
    .add('medium', () => <Avatar src={tempImage} size="medium" />)
    .add('large', () => <Avatar src={tempImage} size="large" />);
