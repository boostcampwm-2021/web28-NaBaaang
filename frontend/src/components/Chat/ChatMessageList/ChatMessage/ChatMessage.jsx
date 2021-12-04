import React, { useContext } from 'react';
import styled from 'styled-components';

import { ReactComponent as DeleteIcon } from '@/assets/images/x.svg';
import { UserContext } from '@/store/UserStore';

import { MESSAGE_TYPE } from '@/constants/messageType';
import { Box, Typography, IconButton } from '@/components/Common';

export default function Message({ message, onDelete }) {
    const { userInfo } = useContext(UserContext);
    const {
        user: { id: receiverId },
    } = userInfo;
    const { id, type, nickname, content, userId, status } = message;

    const deleteButton = !status && (
        <IconButton color="delete" onClick={onDelete(id)}>
            <DeleteIcon />
        </IconButton>
    );

    const isMyMessage = () => {
        return userId === receiverId ? '#81d4fa' : '#EEEEEE';
    };

    return MESSAGE_TYPE[type] === MESSAGE_TYPE.NORMAL ? (
        <MessageBox flexDirection="column" width="90%" alignItems="flex-start">
            <Typography color="primary" align="left" variant="span">
                {nickname}
            </Typography>
            <Box
                flexDirection="row"
                width="100%"
                justifyContent="flex-start"
                alignItems="flex-end"
            >
                {deleteButton}

                <Bubble backgroundColor={isMyMessage()}>
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
            alignItems="flex-start"
        >
            <Box alignItems="flex-end">
                {deleteButton}
                <Bubble>
                    <MessageBox>
                        <Typography color="black3" align="center">
                            <Typography
                                color="primary"
                                align="left"
                                variant="span"
                            >
                                {nickname}
                            </Typography>
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
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledDonation = styled(Box)`
    width: 95%;
    height: auto;
    margin: 1rem;
`;
