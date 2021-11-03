import React from 'react';

import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';

import Modal from '@/components/Modal';
import TextField from '@/components/TextField';

import useChannelCreateHook from './ChannelCreateHook';

export default function ChannelCreateModal() {
    const { titleRef, categoryRef, descriptionRef, createChannel } =
        useChannelCreateHook();

    const modalContents = (
        <ModalBody>
            <InputRow>
                <TextField labelText="제목" inputRef={titleRef} />
            </InputRow>
            <InputRow>
                <TextField labelText="카테고리" inputRef={categoryRef} />
            </InputRow>
            <InputRow>
                <TextField labelText="설명" inputRef={descriptionRef} />
            </InputRow>
        </ModalBody>
    );

    return (
        <Modal
            open
            showButton
            onSuccessText="방송 생성"
            onSuccess={createChannel}
            onCancleText="취소"
        >
            {modalContents}
        </Modal>
    );
}

const ModalBody = styled.section`
    ${flexMixin('column', 'space-around', 'center')}
    ${sizeMixin('100%', '100%')}
`;

const InputRow = styled.div`
    ${flexMixin('row', 'space-between', 'center')}
    margin: 16px 0;
`;
