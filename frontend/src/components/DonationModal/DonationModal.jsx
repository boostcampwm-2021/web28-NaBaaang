import React from 'react';
import styled from 'styled-components';
import Modal from '@/components/Modal';
import bit1Icon from '@/assets/images/bit-1.png';

import DonationItem from './DonationItem';

export default function DonationModal() {
    return (
        <Modal open showButton onSuccessText="전송" onCancleText="취소">
            <Title>비트를 선택해주세요</Title>
            <DonationItem imgSrc={bit1Icon} value={1} />
        </Modal>
    );
}

const Title = styled.h2`
    margin-bottom: 30px;
`;
