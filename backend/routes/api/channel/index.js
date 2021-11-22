import express from 'express';
const router = express.Router();
import channelController from './channel.controller.js';
import authController from '../auth/auth.controller.js';

router.get('/:id', channelController.getChannel);
router.get(
    '/:id/authenticate',
    channelController.setUserRole,
    channelController.getAuthenticatedChannel,
);

router.get('/', channelController.getLiveChannels);
router.patch('/:id/open', channelController.openChannel);
router.patch('/:id/close', channelController.closeChannel);
router.post('/', authController.authenticate, channelController.createChannel);
router.post('/:id/watch', channelController.watchChannel);
export default router;
