import React from 'react';
import styled from 'styled-components';
import Card from '@/components/Card';
import { flexMixin } from '@/styles/mixins.js';

export default function Modal({ open, onClose, onSuccess, children }) {
    if (!open) return null;

    return (
        <ModalWrap>
            <ModalLayer onClick={onClose} />
            <Card width="350px" height="350px">
                <ModalHeader>NaBaang</ModalHeader>
                {children && <ModalContent>{children}</ModalContent>}
                <ModalButtonWrap>
                    <ModalButton onClick={onClose}>취소</ModalButton>
                    <ModalButton onClick={onSuccess}>성공</ModalButton>
                </ModalButtonWrap>
            </Card>
        </ModalWrap>
    );
}

const ModalWrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid black;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0.8;
    ${flexMixin('row', 'center', 'center')}
    z-index: 1024;
`;

const ModalHeader = styled.h3`
    font-family: 'notoSansBold';
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: auto;
    text-align: center;
`;

const ModalLayer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.black};
    z-index: -1;
`;

const ModalContent = styled.div`
    text-align: center;
    margin: auto 0;
`;

const ModalButtonWrap = styled.div`
    width: 100%;
    margin-top: auto;
    ${flexMixin('row', 'space-between', 'center')}
`;

const ModalButton = styled.button`
    outline: none;
    width: 100px;
    height: 30px;
    margin: 0 auto;
`;
