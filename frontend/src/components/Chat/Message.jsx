import React from 'react';
import styled from 'styled-components';

import { MESSAGE_TYPE } from '@/constants/messageType';
import { Box, Button, Typography } from '@/components/Common';
// import { Box, Button } from '../Common';

export default function Message({
    id,
    type,
    nickname,
    content,
    status,
    onDelete,
}) {
    const deleteButton = !status && (
        <DeleteButton
            text="X"
            color="error"
            size="extra_small"
            onClick={onDelete(id)}
        />
    );
    return MESSAGE_TYPE[type] === MESSAGE_TYPE.NORMAL ? (
        <MessageBox flexDirection="column" width="85%" alignItems="flex-start">
            {nickname}
            <Box
                flexDirection="row"
                width="85%"
                justifyContent="flex-start"
            >
                {deleteButton}
                <Bubble>{content}</Bubble>
            </Box>
        </MessageBox>
    ) : (
        <StyledDonation>
            <Box
                flexDirection="row"
                width="85%"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {deleteButton}
                <Bubble>
                    <MessageBox>
                        {nickname}님이 <br />
                        비트 {content}개 선물하였습니다!!
                    </MessageBox>
                </Bubble>
            </Box>
        </StyledDonation>
    );
}

const MessageBox = styled(Box)`
    min-height: 1rem;
    margin: 1rem;
     ${/*fontMixin(
         '1em',
         '1em',
         'notoSansMedium',
         ({ theme }) => theme.color.primary,
     )*/}

`;

const Bubble = styled.div`
    max-width: 100%;
    overflow-wrap: break-word;
    margin-top: 0.5em;
    padding: 0.5em;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.offwhite};
    ${/*fontMixin(
        '1em',
        '1em',
        'notoSansMedium',
        ({ theme }) => theme.color.black2,
    )*/};
`;

const DeleteButton = styled(Button)`
    position: absolute;
    right: 0;
`;

const StyledDonation = styled.div`
    min-height: 30px;
    margin: 30px;
    text-align: center;
`;

const StyledDonationValue = styled.div`
    text-align: center;
    ${/*fontMixin('1em', '1em', 'notoSansMedium')*/}
`;
