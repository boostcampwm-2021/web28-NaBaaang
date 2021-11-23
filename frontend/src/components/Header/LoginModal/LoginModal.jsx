import React from 'react';
import { useLocation } from 'react-router-dom';

import { GOOGLE_AUTH_RESOURCE_SERVER_URL } from '@/constants/url';

import { Box, Button, Typography } from '@/components/Common';

export default function LoginModal() {
    const location = useLocation();
    const handleOnSubmit = () => {
        const stateParam = `&state={"referrer":"${location.pathname}"}`;
        window.location.href = GOOGLE_AUTH_RESOURCE_SERVER_URL + stateParam;
    };

    return (
        <Box flexDirection="column">
            <Typography variant="h1" marginBottom={2}>
                로그인
            </Typography>
            <Button
                text="Sign in with Google"
                size="medium"
                color="error"
                onClick={handleOnSubmit}
            />
        </Box>
    );
}
