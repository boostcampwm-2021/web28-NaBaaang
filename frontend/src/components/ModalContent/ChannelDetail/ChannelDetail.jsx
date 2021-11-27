import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ModalContext } from '@/store/ModalStore';
import { Box } from '@/components/Common';
import Typography from '@/components/Common/Typography/Typography';
import Button from '@/components/Common/Button/Button';

export default function ChannelAlertModal({ channelInfo }) {
    const { closeModal, modalContent } = useContext(ModalContext);
    const navigate = useNavigate();
    const handleOnSuccess = async () => {
        try {
            closeModal(modalContent);
            navigate(`/stream-manager/${channelInfo.id}`);
        } catch (err) {
            throw new Error(err);
        }
    };

    return (
        <Box flexDirection="column">
            <Typography varaint="p" marginBottom={1}>
                이미 생성된 방송이 있습니다.
            </Typography>

            <Typography varaint="h1">방송 정보</Typography>

            <ChannelInfoWrapper flexDirection="column" marginBottom={1}>
                <Typography varaint="span">
                    title: {channelInfo.title}
                </Typography>
                <Typography varaint="span">
                    category: {channelInfo.category}
                </Typography>
            </ChannelInfoWrapper>

            <Typography varaint="span" marginBottom={1}>
                해당 방송으로 이동 하시겠습니까?
            </Typography>

            <Box>
                <Button
                    marginRight={3}
                    text="취소"
                    color="error"
                    onClick={() => {
                        closeModal(modalContent);
                    }}
                />

                <Button text="확인" color="success" onClick={handleOnSuccess} />
            </Box>
        </Box>
    );
}

const ChannelInfoWrapper = styled(Box)`
    background-color: ${({ theme }) => theme.color.gray3};
    padding: 1rem;
    align-items: start;
`;
