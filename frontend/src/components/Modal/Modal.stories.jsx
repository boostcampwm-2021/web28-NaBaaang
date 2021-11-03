import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '@/components/Modal';

const InputModal = () => {
    const inputRef = useRef(null);

    const handleOnClose = () => {
        action('onClose!!')();
    };

    const handleOnSuccess = () => {
        action(inputRef.current.value)();
    };

    return (
        <Modal open onClose={handleOnClose} onSuccess={handleOnSuccess}>
            <input ref={inputRef} />
        </Modal>
    );
};

storiesOf('Modal', module)
    .add('closed', () => <Modal />)
    .add('opend', () => <Modal open />)
    .add('onClose', () => <Modal open onClose={action('onClose!!')} />)
    .add('onSuccess', () => <Modal open onSuccess={action('onSuccess!!')} />)
    .add('inputModal', () => <InputModal />);
