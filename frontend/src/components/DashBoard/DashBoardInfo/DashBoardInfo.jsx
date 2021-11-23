import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@/components/Common/Box';
import ChannelModal from '@/components/Header/ChannelModal';
import { fetchUpdateChannel } from '@/apis/channel';
import DashBoardCard from '../DashBoardCard';
import MediaInfoModal from '../MediaInfoModal';

export default function DashBoardInfo({ info }) {
    const { id, streamKey, title, category, description } = info;
    const [medialModalOpen, setMedialModalOpen] = useState(false);
    const [channelFormModalOpen, setChannelFormModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleMedialModalOpen = () => {
        setMedialModalOpen(true);
    };

    const handleMedialModalClose = () => {
        setMedialModalOpen(false);
    };

    const handleChannelModalOpen = () => {
        setChannelFormModalOpen(true);
    };

    const handleChannelModalClose = () => {
        setChannelFormModalOpen(false);
    };

    const handleUpdateChannel = async formData => {
        try {
            const { id: channelId } = await fetchUpdateChannel({
                id,
                ...formData,
            });
            handleChannelModalClose();
            navigate(`/stream-manager/${channelId}`);
        } catch (err) {
            throw new Error(err);
        }
    };

    return (
        <Box
            height="100%"
            type="black"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            flex={1}
        >
            <MediaInfoModal
                open={medialModalOpen}
                streamKey={streamKey}
                onClose={handleMedialModalClose}
            />

            <ChannelModal
                open={channelFormModalOpen}
                onClose={handleChannelModalClose}
                successText="방송 수정"
                initFormData={{ title, category, description }}
                handleOnSubmit={handleUpdateChannel}
            />

            <DashBoardCard
                onClick={handleChannelModalOpen}
                title="방송 정보 편집"
                info={info}
            />

            <DashBoardCard
                onClick={handleMedialModalOpen}
                title="송출 정보 확인"
            />
            <DashBoardCard title="OBS 가이드" />
        </Box>
    );
}
