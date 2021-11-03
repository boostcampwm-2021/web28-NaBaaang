import React from 'react';
import { ReactComponent as IconBit1 } from '@/assets/images/icon-bit-1.svg';
import { ReactComponent as IconBit50 } from '@/assets/images/icon-bit-50.svg';
import { ReactComponent as IconBit100 } from '@/assets/images/icon-bit-100.svg';
import { ReactComponent as IconBit300 } from '@/assets/images/icon-bit-300.svg';
import { ReactComponent as IconBit500 } from '@/assets/images/icon-bit-500.svg';

const MESSAGE_TYPE = {
    NORMAL: 0,
    DONATION: 1,
};

const BIT_TYPE = {
    BIT_1: {
        image: <IconBit1 />,
        value: 1,
    },
    BIT_50: {
        image: <IconBit50 />,
        value: 50,
    },
    BIT_100: {
        image: <IconBit100 />,
        value: 100,
    },
    BIT_300: {
        image: <IconBit300 />,
        value: 300,
    },
    BIT_500: {
        image: <IconBit500 />,
        value: 500,
    },
};

export { MESSAGE_TYPE, BIT_TYPE };
