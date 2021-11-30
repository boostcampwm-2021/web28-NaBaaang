import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalContext } from '@/store/ModalStore';
import { Box, Typography } from '@/components/Common';
import useCounter from '@/hooks/useCounter';

export default function ChannelEnd() {
    const { closeModal } = useContext(ModalContext);
    const navigate = useNavigate();
    const { count, startCounter, stopCounter } = useCounter({
        initCount: 3,
        delay: 1000,
        onStop: closeModal,
    });

    useEffect(() => {
        startCounter();
        return () => {
            stopCounter();
            navigate('/');
        };
    }, []);

    return (
        <Box flexDirection="column">
            <Typography varaint="p" marginBottom={2}>
                방송이 종료 되었습니다.
            </Typography>
            <Typography varaint="p">
                {count}초 뒤에 홈 화면으로 이동합니다.
            </Typography>
        </Box>
    );
}
