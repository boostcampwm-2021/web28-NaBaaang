import React from 'react';

import { storiesOf } from '@storybook/react';
import DropDown from './DropDown';

const profileDropDownItems = () => {
    const items = [
        ['닉네임 변경', () => alert('닉네임 변경')],
        ['로그아웃', () => alert('로그아웃')],
    ];

    const dropDownItems = items.map(([text, handler]) => {
        return { text, handler };
    });

    return dropDownItems;
};

storiesOf('DropDown', module)
    .add('no-items', () => (
        <DropDown
            toggleButtonChild="button"
            contentPos={{ top: '4rem', left: '12.4rem' }}
        />
    ))
    .add('items', () => (
        <DropDown
            toggleButtonChild="button"
            contentPos={{ top: '4rem', left: '12.4rem' }}
            items={profileDropDownItems()}
        />
    ));
