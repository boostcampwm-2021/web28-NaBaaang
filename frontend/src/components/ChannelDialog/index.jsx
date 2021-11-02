import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ChannelDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle sx={{ textAlign: 'center' }}>Nabaaang</DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <TextField
                        autoFocus
                        id="title"
                        label="제목"
                        type="text"
                        variant="filled"
                        margin="normal"
                        required
                        style={{ width: '60%' }}
                    />
                    <TextField
                        id="category"
                        label="카테고리"
                        type="text"
                        variant="filled"
                        margin="normal"
                        required
                        style={{ width: '60%' }}
                    />
                    <TextField
                        id="description"
                        label="설명"
                        type="text"
                        variant="filled"
                        margin="normal"
                        required
                        style={{ width: '60%' }}
                    />
                </DialogContent>
                <DialogActions
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleClose}>방송생성</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
