import express from 'express';
const router = express.Router();
import messageController from '@/routes/api/message/message.controller.js';

router.post('/:id/message', messageController.createMessage);

export default router;
