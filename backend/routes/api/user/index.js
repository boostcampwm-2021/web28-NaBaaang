import express from 'express';
const router = express.Router();
import userController from './user.controller.js';

router.get('/:id/channels', userController.getChannelOwnedByUser);
export default router;
