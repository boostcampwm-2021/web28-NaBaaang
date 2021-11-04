import React from 'react';
import styled from 'styled-components';
import { fontMixin } from '@/styles/mixins';
import { MESSAGE_TYPE } from '@/constants/messageType';

export default function Message({ type, nickname, content }) {
    return MESSAGE_TYPE[type] === MESSAGE_TYPE.NORMAL ? (
        <StyledMessage>
            {nickname}: {content}
        </StyledMessage>
    ) : (
        <StyledDonation>
            <StyledDonationValue>{content}</StyledDonationValue>
            <StyledMessage>
                {nickname}님이 <br />
                비트 {content}개 선물하였습니다!!
            </StyledMessage>
        </StyledDonation>
    );
}

const StyledMessage = styled.p`
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
