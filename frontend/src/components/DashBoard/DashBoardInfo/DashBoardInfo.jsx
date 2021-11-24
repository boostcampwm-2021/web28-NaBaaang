import React, { useContext } from 'react';

import { ModalContext } from '@/store/ModalStore';

import { Box } from '@/components/Common';
import ChannelModal from '@/components/Header/ChannelModal';
import { fetchUpdateChannel } from '@/apis/channel';
import DashBoardCard from '../DashBoardCard';
import MediaInfoModal from '../MediaInfoModal';
import OBSModal from '../OBSModal';

export default function DashBoardInfo({ info, fetchData }) {
    const { id, title, description, category, streamKey } = info;
    const { openModal } = useContext(ModalContext);

    const handleOnUpdateChannel = async formData => {
        try {
            await fetchUpdateChannel(formData);
            fetchData();
        } catch (err) {
            throw new Error(err);
        }
    };

    const openMedialModal = () => {
        openModal(<MediaInfoModal streamKey={streamKey} />);
    };

    const openOBSModal = () => {
        openModal(<OBSModal />);
    };

    const openChannelFormModal = () => {
        openModal(
            <ChannelModal
                initFormData={{ id, title, description, category }}
                subHandleOnSubmit={handleOnUpdateChannel}
                successText="방송 수정"
            />,
        );
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
            <DashBoardCard
                onClick={openChannelFormModal}
                title="방송 정보 편집"
                info={info}
            />
            <DashBoardCard onClick={openMedialModal} title="송출 정보 확인" />
            <DashBoardCard onClick={openOBSModal} title="OBS 가이드" />
        </Box>
    );
}
