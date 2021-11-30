import React, { useContext } from 'react';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '@/assets/images/x.svg';

import Portal from '@/Portal';
import {
    Card,
    Box,
    Typography,
    IconButton,
    Overlay,
} from '@/components/Common';
import { ModalContext } from '@/store/ModalStore';

export default function Modal() {
    const { isModalOpen, closeModal, modalContent } = useContext(ModalContext);
    if (!isModalOpen) return null;

    return (
        <Portal elementId="modal-root">
            <ModalBox width="100%" height="100%">
                <Overlay onClick={() => closeModal(modalContent)} />
                <ModalCard alignItems="stretch" flexDirection="column">
                    <CloseButtonBox>
                        <IconButton
                            color="error"
                            type="square"
                            onClick={() => closeModal(modalContent)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </CloseButtonBox>

                    <Box flex={0.5}>
                        <Typography variant="h3" align="center" color="primary">
                            Nabaaang
                        </Typography>
                    </Box>

                    <ContentBox flex={3}>{modalContent}</ContentBox>
                </ModalCard>
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

const CloseButtonBox = styled(Box)`
    position: absolute;
    left: 100%;
    margin-left: 1rem;
    top: 0;
`;

const ContentBox = styled(Box)`
    text-align: center;
    width: 100%;
    height: 100%;
    align-items: stretch;
`;

const ModalCard = styled(Card)`
    min-width: 350px;
    min-height: 350px;
    width: auto;
    height: auto;
`;
