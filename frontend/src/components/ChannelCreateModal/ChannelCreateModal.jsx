import React, { useRef } from 'react';

import styled, { css } from 'styled-components';
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
                    <InputBox>
                        <Input ref={titleRef} />
                    </InputBox>
                </InputRow>
                <InputRow>
                    <InputLabel>카테고리</InputLabel>
                    <InputBox>
                        <Input ref={categoryRef} />
                    </InputBox>
                </InputRow>
                <InputRow>
                    <InputLabel>설명</InputLabel>
                    <InputBox>
                        <Input ref={descriptionRef} />
                    </InputBox>
                </InputRow>
            </ModalBody>
        );
    };

    const createChannel = () => {
        // const title = titleRef.current.value;
        // const category = categoryRef.current.value;
        // const description = descriptionRef.current.value;
        // POST /api/channels/new 호출
        // 만들어진 채널로 route
    };

    return (
        <Modal
            open
            showButton
            onSuccessText="방송 생성"
            onSuccess={createChannel}
            onCancleText="취소"
        >
            {modalChildren()}
        </Modal>
    );
}

const ModalBody = styled.section`
    ${flexMixin('column', 'space-around', 'center')}
    ${sizeMixin('100%', '100%')}
`;

const InputRow = styled.div`
    ${flexMixin('row', 'space-between', 'center')}
    margin: 20px 0;
`;

const InputLabel = styled.label`
    width: 100px;
`;

const InputBox = styled.div`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border-radius: 40px;
    padding: 5px;
`;

const Input = styled.input`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border: none;
    caret-color: white;
    :focus {
        outline: none;
    }
`;
