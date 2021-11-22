import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal, Button } from '@/components/Common';
import DonationItemList from './DonationItemList';

export default function DonationModal({ onClose, onSuccess }) {
    const [totalDonation, setTotalDonation] = useState(0);

    const handleTotalDonation = value => {
        setTotalDonation(totalDonation + value);
    };

    const handleTotalDonationInit = () => {
        setTotalDonation(0);
    };

    const handleClickSubmit = () => {
        onSuccess(totalDonation);
    };

    return (
        <Modal
            open
            successText="전송"
            closeText="취소"
            onClose={onClose}
            onSuccess={handleClickSubmit}
        >
            <Title>비트를 선택해주세요</Title>

            <Row>
                <DonationItemList handleTotalDonation={handleTotalDonation} />
            </Row>

            <Row>
                누적 값 : {totalDonation}
                <Button
                    onClick={handleTotalDonationInit}
                    text="초기화"
                    color="error"
                />
            </Row>
        </Modal>
    );
}

const Title = styled.h2`
    margin-bottom: 30px;
`;

const Row = styled.div``;
