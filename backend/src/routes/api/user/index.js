import express from 'express';
const router = express.Router();
import userController from './user.controller.js';

router.patch('/:id', userController.updateNickname);
router.get('/:id/channels', userController.getChannelOwnedByUser);

export default router;
