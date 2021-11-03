import React from 'react';
import styled from 'styled-components';
import Card from '@/components/Card';
import { flexMixin } from '@/styles/mixins.js';

export default function Modal({
    open,
    showButton,
    onClose,
    onSuccess,
    onCancleText,
    onSuccessText,
    children,
}) {
    if (!open) return null;

    const cancleText = !onCancleText ? 'Cancle' : onCancleText;
    const successText = !onSuccessText ? 'OK' : onSuccessText;

    return (
        <ModalWrap>
            <Overlay onClick={onClose} />
            <Card width="350px" height="350px">
                <ModalHeader>NaBaang</ModalHeader>
                {children && <ModalContent>{children}</ModalContent>}

                {showButton && (
                    <ModalButtonWrap>
                        <CloseButton onClick={onClose}>
                            {cancleText}
                        </CloseButton>
                        <SuccessButton onClick={onSuccess}>
                            {successText}
                        </SuccessButton>
                    </ModalButtonWrap>
                )}
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
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: auto;
    text-align: center;
`;

const Overlay = styled.div`
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
    margin-bottom: auto;
`;

const CloseButton = styled.button`
    background-color: ${({ theme }) => theme.color.red};
`;

const SuccessButton = styled.button`
    background-color: ${({ theme }) => theme.color.primary};
`;

const ModalButtonWrap = styled.div`
    width: 100%;
    margin-top: auto;
    ${flexMixin('row', 'space-between', 'center')}

    button {
        outline: none;
        border: none;
        border-radius: 5px;
        width: 100px;
        height: 35px;
        margin: 0 auto;
        color: ${({ theme }) => theme.color.white};
        cursor: pointer;
        font-family: 'notoSansBold';
        font-size: 16px;
    }
`;
