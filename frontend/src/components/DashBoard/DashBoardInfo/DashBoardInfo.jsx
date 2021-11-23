import React, { useContext } from 'react';

import { ModalContext } from '@/store/ModalStore';

import { Box } from '@/components/Common';
import DashBoardCard from '../DashBoardCard';
import MediaInfoModal from '../MediaInfoModal';
import OBSModal from '../OBSModal';

export default function DashBoardInfo({ info }) {
    const { streamKey } = info;
    const { openModal } = useContext(ModalContext);

    const openMedialModal = () => {
        openModal(<MediaInfoModal streamKey={streamKey} />);
    };

    const openOBSModal = () => {
        openModal(<OBSModal />);
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
            <DashBoardCard title="방송 정보 편집" info={info} />
            <DashBoardCard onClick={openMedialModal} title="송출 정보 확인" />
            <DashBoardCard onClick={openOBSModal} title="OBS 가이드" />
        </Box>
    );
}
