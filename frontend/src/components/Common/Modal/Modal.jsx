import React from 'react';
import styled from 'styled-components';

import { flexMixin, fontMixin } from '@/styles/mixins.js';

import Portal from '@/Portal';
import Card from '@/components/Common/Card';
import Button from '@/components/Common/Button';
import Box from '@/components/Common/Box';
import Typography from '../Typography/Typography';

export default function Modal({
    open,
    showButton,
    alert,
    onClose,
    onSuccess,
    onCancelText,
    onSuccessText,
    children,
}) {
    const cancleText = !onCancelText ? 'Cancle' : onCancelText;
    const successText = !onSuccessText ? 'OK' : onSuccessText;

    if (!open) return null;

    return (
        <Portal elementId="modal-root">
            <ModalBox width="100%" height="100%">
                <OverlayBox onClick={onClose} width="100%" height="100%" />
                <Card flexDirection="column" width="350px" height="350px">
                    <Box flex={0.5}>
                        <Typography
                            variant="h3"
                            align="center"
                            color={({ theme }) => theme.color.primary}
                        >
                            Nabaaang
                        </Typography>
                    </Box>
                    {children && <ContentBox flex={3}>{children}</ContentBox>}

                    {showButton && alert ? (
                        <ButtonBox flex={1} alignItems="center">
                            <Button
                                color="success"
                                onClick={onSuccess}
                                text={successText}
                                size="small"
                            />
                        </ButtonBox>
                    ) : (
                        <ButtonBox flex={1} alignItems="center">
                            <Button
                                color="error"
                                onClick={onClose}
                                text={cancleText}
                                size="small"
                            />

                            <Button
                                color="success"
                                onClick={onSuccess}
                                text={successText}
                                size="small"
                            />
                        </ButtonBox>
                    )}
                </Card>
            </ModalBox>
        </Portal>
    );
}

const ModalBox = styled(Box)`
    position: fixed;
    left: 0;
    top: 0;
    border: 1px solid black;
    z-index: 1024;
`;

const OverlayBox = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.8);
    z-index: -1;
`;

const ContentBox = styled(Box)`
    ${fontMixin('1rem', '1em', 'notoSansMedium')}
    text-align: center;
    margin-bottom: auto;
    ${flexMixin('column', 'center', 'center')}
`;

const ButtonBox = styled(Box)`
    width: 100%;
    margin-top: auto;
    button {
        margin: 0 auto;
    }
`;
