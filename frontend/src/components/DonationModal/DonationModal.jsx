import React from 'react';
import styled from 'styled-components';
import Modal from '@/components/Modal';
import DonationItemList from './DonationItemList';

export default function DonationModal({ onClose }) {
    return (
        <Modal
            open
            showButton
            onSuccessText="전송"
            onCancleText="취소"
            onClose={onClose}
        >
            <Title>비트를 선택해주세요</Title>
            <DonationItemList />
        </Modal>
    );
}

const Title = styled.h2`
    margin-bottom: 30px;
`;
