import React, { useContext } from 'react';
import styled from 'styled-components';

import { flexMixin, fontMixin } from '@/styles/mixins.js';

import { ReactComponent as CloseIcon } from '@/assets/images/close-icon.svg';

import Portal from '@/Portal';
import { Card, Box, Typography, IconButton } from '@/components/Common';
import { ModalContext } from '@/store/ModalStore';

export default function Modal() {
    const { isModalOpen, closeModal, modalContent } = useContext(ModalContext);

    if (!isModalOpen) return null;

    return (
        <Portal elementId="modal-root">
            <ModalBox width="100%" height="100%">
                <OverlayBox onClick={closeModal} width="100%" height="100%" />

                <Card alignItems="stretch" flexDirection="column" width="350px" height="350px">
                    <CloseButtonBox>
                        <IconButton type="square" onClick={closeModal}>
                            <CloseIcon />
                        </IconButton>
                    </CloseButtonBox>

                    <Box flex={0.5}>
                        <Typography
                            variant="h3"
                            align="center"
                            color={({ theme }) => theme.color.primary}
                        >
                            Nabaaang
                        </Typography>
                    </Box>

                    <ContentBox flex={3}>{modalContent}</ContentBox>
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

const CloseButtonBox = styled(Box)`
    position: absolute;
    left: 100%;
    margin-left: 1rem;
    top: 0;
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
