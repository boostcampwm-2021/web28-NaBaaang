import express from 'express';
const router = express.Router();
import channelController from './channel.controller.js';
import authController from '../auth/auth.controller.js';
/**
 * @swagger
 *
 * /user:
 *   get:
 *     tags:
 *       - pet
 *     description: pet id로 정보 가져오기
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/components/parameters/path/id'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/get/200/pet'
 *
 */
router.get('/:id', channelController.setUserRole, channelController.getChannel);
router.get('/:id/authenticate', channelController.getAuthenticatedChannel);

router.get('/', channelController.getLiveChannels);
router.patch('/:id/open', channelController.openChannel);
router.patch('/:id/close', channelController.closeChannel);
router.post('/', authController.authenticate, channelController.createChannel);
router.post('/:id/watch', channelController.watchChannel);
export default router;
