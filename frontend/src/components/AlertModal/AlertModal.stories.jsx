import React from 'react';
import { storiesOf } from '@storybook/react';

import AlertModal from './AlertModal';

storiesOf('AlertModal', module).add('open', () => <AlertModal open />);
