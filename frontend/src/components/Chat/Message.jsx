import React from 'react';
import styled from 'styled-components';

import { fontMixin } from '@/styles/mixins';
import { MESSAGE_TYPE } from '@/constants/messageType';

import { Box, Button, Typography } from '../Common';

export default function Message({ type, nickname, content, status }) {
    if (MESSAGE_TYPE[type] === MESSAGE_TYPE.NORMAL) {
        return status > 0 ? (
            <SentMessage>
                <Typography variant="span" align="left">
                    {nickname}:{content}
                </Typography>
            </SentMessage>
        ) : (
            <UnSentMessage
                flexDirection="column"
                width="250px"
                height="55px"
                alignSelf="left"
            >
                <Typography variant="span" align="left">
                    {nickname}:{content}
                </Typography>
                <Button text="X" color="error" size="extra_small" />
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
    ${fontMixin('1em', '1em', 'notoSansMedium')}
`;

const UnSentMessage = styled(Box)`
    border-radius: 15px;
    border: 1px solid red;
    min-height: 1rem;
    margin: 1rem;
    ${fontMixin('1em', '1em', 'notoSansMedium')}
`;

const StyledDonation = styled.div`
    min-height: 30px;
    margin: 30px;
    ${fontMixin('1em', '1em', 'notoSansMedium')}
    text-align:center;
`;

const StyledDonationValue = styled.div`
    ${fontMixin('1em', '1em', 'notoSansMedium')}
    text-align:center;
`;
