import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';

storiesOf('Modal', module)
    .add('open', () => <Modal open />)
    .add('closeText', () => (
        <Modal open closeText="취소" onClose={action('close!!')} />
    ))
    .add('successText', () => (
        <Modal open successText="성공" onSuccess={action('success!')} />
    ))
    .add('children', () => (
        <Modal open successText="성공" onSuccess={action('success!')}>
            <div>Hello</div>
        </Modal>
    ));
