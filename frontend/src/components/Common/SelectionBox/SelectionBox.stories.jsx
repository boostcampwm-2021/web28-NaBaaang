import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { CATEGORY } from '@/constants/category';
import SelectionBox from './SelectionBox';

storiesOf('SelectionBox', module)
    .add('no-items', () => <SelectionBox width="80%" />)
    .add('items', () => {
        const [selectedItem, setSelectedItems] = useState(-1);
        return (
            <SelectionBox
                toggleButtonChild="button"
                items={CATEGORY}
                setSelectedItems={setSelectedItems}
                selectedItem={selectedItem}
            />
        );
    });
