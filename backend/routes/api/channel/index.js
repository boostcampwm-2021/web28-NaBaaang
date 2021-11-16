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
router.get('/:id', channelController.getChannel);
router.get('/', channelController.getLiveChannels);
router.patch('/:id/open', channelController.openChannel);
router.patch('/:id/close', channelController.closeChannel);
router.post('/', authController.auth, channelController.createChannel);

export default router;
