import express from 'express';
const router = express.Router();
import channelController from './channel.controller.js';
import authController from '@/routes/api/auth/auth.controller.js';

router.get('/:id', channelController.getChannel);
router.get(
    '/:id/authenticate',
    channelController.setUserRole,
    channelController.getAuthenticatedChannel,
);
router.get('/', channelController.getLiveChannels);
router.post('/', authController.authenticate, channelController.createChannel);
router.patch(
    '/:id',
    authController.authenticate,
    channelController.updateChannel,
);
router.patch('/:id/open', channelController.openChannel);
router.patch('/:id/pause', channelController.standByChannel);
router.patch('/:id/close', channelController.closeChannel);
router.post('/:id/watch', channelController.watchChannel);
export default router;
