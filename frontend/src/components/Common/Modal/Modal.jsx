import React from 'react';
import styled from 'styled-components';
import Portal from '@/Portal';
import Card from '@/components/Common/Card';
import Button from '@/components/Common/Button';
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
        <Portal elementId="modal-root">
            <ModalWrap>
                <Overlay onClick={onClose} />
                <Card direction="column" width="350px" height="350px">
                    <ModalHeader>NaBaang</ModalHeader>
                    {children && <ModalContent>{children}</ModalContent>}

                    {showButton && (
                        <ModalButtonWrap>
                            <Button
                                color="error"
                                onClick={onClose}
                                text={cancleText}
                                size="medium"
                            />

                            <Button
                                color="success"
                                onClick={onSuccess}
                                text={successText}
                                size="medium"
                            />
                        </ModalButtonWrap>
                    )}
                </Card>
            </ModalWrap>
        </Portal>
    );
}

const ModalWrap = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    border: 1px solid black;
    padding: 20px;
    box-sizing: border-box;
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
    background-color: rgb(0, 0, 0, 0.8);
    z-index: -1;
`;

const ModalContent = styled.div`
    text-align: center;
    margin-bottom: auto;
`;

const ModalButtonWrap = styled.div`
    width: 100%;
    margin-top: auto;
    ${flexMixin('row', 'space-between', 'center')}

    button {
        margin: 0 auto;
    }
`;
