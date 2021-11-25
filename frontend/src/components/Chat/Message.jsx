import React from 'react';
import styled from 'styled-components';

import { MESSAGE_TYPE } from '@/constants/messageType';
// import { Box, Button, Typography } from '@/components/Common';
import { Box, Button, Typography } from '@/components/Common';

export default function Message({
    id,
    type,
    nickname,
    content,
    status,
    onDelete,
}) {
    const deleteButton = status && (
        <DeleteButton
            text="X"
            color="error"
            size="extra_small"
            onClick={onDelete(id)}
        />
    );
    return MESSAGE_TYPE[type] === MESSAGE_TYPE.NORMAL ? (
        <MessageBox flexDirection="column" width="90%" alignItems="flex-start">
            <Typography color="primary" align="left" variant="span">
                {nickname}
            </Typography>
            <Box flexDirection="row" width="100%" justifyContent="flex-start">
                {deleteButton}
                <Bubble>
                    <Typography color="black3" align="left">
                        {content}
                    </Typography>
                </Bubble>
            </Box>
        </MessageBox>
    ) : (
        <StyledDonation
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                {deleteButton}
                <Bubble>
                    <MessageBox>
                        <Typography color="primary" align="left" variant="span">
                            {nickname}
                        </Typography>
                        <Typography color="black3" align="center">
                            님이 비트 {content}개 선물하였습니다!!!
                        </Typography>
                    </MessageBox>
                </Bubble>
            </Box>
        </StyledDonation>
    );
}

const MessageBox = styled(Box)`
    min-height: 1rem;
    margin: 1rem;
`;

const Bubble = styled.div`
    max-width: 100%;
    overflow-wrap: break-word;
    margin-top: 0.5em;
    padding: 0.5em;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.offwhite};
`;

const DeleteButton = styled(Button)`
    position: absolute;
    right: 0;
`;

const StyledDonation = styled(Box)`
    width: 100%;
    height: auto;
`;
