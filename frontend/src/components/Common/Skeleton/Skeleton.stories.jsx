import React from 'react';
import { storiesOf } from '@storybook/react';

import { Skeleton } from '@/components/Common';

storiesOf('Skeleton', module)
    .add('rectangle', () => <Skeleton />)
    .add('circle', () => <Skeleton width={30} height={30} variant="circle" />);
