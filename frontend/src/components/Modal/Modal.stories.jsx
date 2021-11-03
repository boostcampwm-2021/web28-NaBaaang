import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '@/components/Modal';

storiesOf('Modal', module)
    .add('closed', () => <Modal />)
    .add('opend', () => <Modal open />)
    .add('onClose', () => <Modal open onClose={action('onClose!!')} />);
