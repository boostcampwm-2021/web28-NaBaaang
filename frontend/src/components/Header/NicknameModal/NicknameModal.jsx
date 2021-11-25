import React, { useState, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';

import { ModalContext } from '@/store/ModalStore';

import { Box, Button, Typography } from '@/components/Common';

function NicknameModal({ onSubmit }) {
    const { closeModal } = useContext(ModalContext);

    const inputRef = useRef();
    const [error, setError] = useState(null);

    const handleOnSubmit = async () => {
        try {
            const inputData = inputRef.current.value;
            if (inputData === '') setError('닉네임을 입력해주세요');
            else {
                await onSubmit({ nickname: inputData });
                closeModal();
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Box flexDirection="column" justifyContent="space-evenly">
            <Typography variant="h3">닉네임 변경하기</Typography>
            <InputBox ref={inputRef} />
            {error && <Typography variant="p">{error}</Typography>}
            <Button text="변경하기" color="success" onClick={handleOnSubmit} />
        </Box>
    );
}

const InputBox = styled.input`
    width: 100%;
    height: 2rem;
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border-radius: 40px;
    padding: 0.5rem;
`;

export default NicknameModal;
