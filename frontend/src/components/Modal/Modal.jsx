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
    borderRadius: 5,
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const headerStyle = {
    marginBottom: 'auto',
    color: '#7236D6',
    fontWeight: 'bold',
};

const slotStyle = {
    marginBottom: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
};

const buttonBoxStyle = {
    marginTop: 'auto',
    '& button:first-child': {
        marginRight: 2,
    },
};

export default function StyeldModal({ title = true, isButton = false, slot }) {
    const [isOpen, setIsOpen] = useState(true);

    const handeModalClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal open={isOpen} sx={modalStyle}>
            <Box sx={boxStyle}>
                {title && (
                    <Typography variant="h5" align="center" sx={headerStyle}>
                        NaBaang
                    </Typography>
                )}

                {slot && <Box sx={slotStyle}>{slot}</Box>}

                {isButton && (
                    <Box sx={buttonBoxStyle}>
                        <Button variant="outlined" color="error" onClick={handeModalClose}>
                            Cancle
                        </Button>
                        <Button variant="outlined">OK</Button>
                    </Box>
                )}
            </Box>
        </Modal>
    );
}
