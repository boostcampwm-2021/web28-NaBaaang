import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

function Foo() {
    return <div>TEST!</div>;
}

storiesOf('Modal', module)
    .add('버튼 X, 자식 X', () => <Modal />)
    .add('버튼 O, 자식 X', () => <Modal isButton />)
    .add('버튼 X, 자식 O', () => <Modal slot={<Foo />} />)
    .add('버튼 O, 자식 O', () => <Modal slot={<Foo />} isButton />);
