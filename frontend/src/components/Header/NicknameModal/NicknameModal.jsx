import React from 'react';

import { Box, Button, TextField, Typography } from '@/components/Common';

function NicknameModal() {
    return (
        <Box width="100%" height="auto">
            <Typography variant="h3">닉네임 변경하기</Typography>
            <TextField value="신정원" />
            <Button text="변경하기" color="success" />
        </Box>
    );
}

export default NicknameModal;
