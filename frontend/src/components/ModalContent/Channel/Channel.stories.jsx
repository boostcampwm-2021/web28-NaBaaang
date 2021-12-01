import React from 'react';
import { storiesOf } from '@storybook/react';

import Channel from './Channel';

storiesOf('ChannelCreateModal', module).add('open', () => <Channel open />);
