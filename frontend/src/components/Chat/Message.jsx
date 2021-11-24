import React from 'react';
import styled from 'styled-components';

import { MESSAGE_TYPE } from '@/constants/messageType';
import { Box, Button, Typography } from '@/components/Common';

export default function Message({
    id,
    type,
    nickname,
    content,
    status,
    onDelete,
}) {
    if (MESSAGE_TYPE[type] === MESSAGE_TYPE.NORMAL) {
        return status > 0 ? (
            <SentMessage>
                <Typography variant="span">
                    {nickname}:{content}
                </Typography>
            </SentMessage>
        ) : (
            <UnSentMessage flexDirection="column" width="250px" height="55px">
                <Typography variant="span">
                    {nickname}:{content}
                </Typography>
                <Button
                    text="X"
                    color="error"
                    size="extra_small"
                    onClick={onDelete(id)}
                />
            </UnSentMessage>
        );
    }
    return (
        <StyledDonation>
            <StyledDonationValue>{content}</StyledDonationValue>
            <SentMessage>
                {nickname}님이 <br />
                비트 {content}개 선물하였습니다!!
            </SentMessage>
        </StyledDonation>
    );
}

const SentMessage = styled(Box)`
    min-height: 1rem;
    margin: 1rem;
`;

const UnSentMessage = styled(Box)`
    border-radius: 15px;
    border: 1px solid red;
    min-height: 1rem;
    margin: 1rem;
`;

const StyledDonation = styled.div`
    min-height: 30px;
    margin: 30px;
    text-align: center;
`;

const StyledDonationValue = styled.div`
    text-align: center;
`;
