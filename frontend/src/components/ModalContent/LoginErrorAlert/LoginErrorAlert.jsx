import React from 'react';
import { useLocation } from 'react-router-dom';

import { GOOGLE_AUTH_RESOURCE_SERVER_URL } from '@/constants/url';

import { Box, Button, Typography } from '@/components/Common';

function LoginErrorAlert({ errCode }) {
    const location = useLocation();
    const handleOnSubmit = () => {
        const stateParam = `&state={"referrer":"${location.pathname}"}`;
        window.location.href = GOOGLE_AUTH_RESOURCE_SERVER_URL + stateParam;
    };
    return (
        <Box flexDirection="column">
            <Typography variant="h5" marginBottom={2} >{`[ERR:${errCode}] 다시 로그인 해주세요.`}</Typography>
            <Button
                text="Sign in with Google"
                size="medium"
                color="light"
                onClick={handleOnSubmit}
            />
        </Box>
    );
}

export default LoginErrorAlert;
