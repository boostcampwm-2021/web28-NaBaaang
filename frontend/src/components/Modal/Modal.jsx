import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const boxStyle = {
    width: 400,
    height: 400,
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    boxSizing: 'border-box',
};

export default function StyeldModal() {
    const [isOpen, setIsOpen] = useState(true);

    const handeModalClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal open={isOpen} sx={modalStyle}>
            <Box sx={boxStyle}>
                <Typography variant="h5" align="center">
                    NaBaang
                </Typography>

                <Button variant="contained" onClick={handeModalClose}>
                    취소
                </Button>
            </Box>
        </Modal>
    );
}
