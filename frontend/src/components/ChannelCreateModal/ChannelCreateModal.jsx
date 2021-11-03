import React, { useRef } from 'react';

import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';

import Modal from '@/components/Modal';

export default function ChannelCreateModal() {
    const titleRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const modalChildren = () => {
        return (
            <ModalBody>
                <InputRow>
                    <InputLabel>제목</InputLabel>
                    <Input ref={titleRef} />
                </InputRow>
                <InputRow>
                    <InputLabel>카테고리</InputLabel>
                    <Input ref={categoryRef} />
                </InputRow>
                <InputRow>
                    <InputLabel>설명</InputLabel>
                    <Input ref={descriptionRef} />
                </InputRow>
            </ModalBody>
        );
    };

    return (
        <Modal open showButton>
            {modalChildren()}
        </Modal>
    );
}

const ModalBody = styled.section`
    ${flexMixin('column', 'space-around', 'center')}
    ${sizeMixin('100%', '100%')}
`;

const InputRow = styled.div``;

const InputLabel = styled.label``;

const Input = styled.input``;
