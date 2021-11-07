import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';

const InputModal = () => {
    const inputRef = useRef(null);

    const handleOnClose = () => {
        action('onClose!!')();
    };

    const handleOnSuccess = () => {
        action(inputRef.current.value)();
    };

    return (
        <Modal
            open
            onClose={handleOnClose}
            onSuccess={handleOnSuccess}
            showButton
            onCancleText="취소"
            onSuccessText="방송 생성"
        >
            <input ref={inputRef} />
        </Modal>
    );
};

storiesOf('Modal', module)
    .add('closed', () => <Modal />)
    .add('open', () => <Modal open />)
    .add('buttonText', () => (
        <Modal open showButton onCancleText="Foo" onSuccessText="Bar" />
    ))
    .add('onClose', () => (
        <Modal open showButton onClose={action('onClose!!')} />
    ))
    .add('onSuccess', () => (
        <Modal open showButton onSuccess={action('onSuccess!!')} />
    ))
    .add('inputModal', () => <InputModal />);
