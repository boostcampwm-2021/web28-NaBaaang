import express from 'express';
const router = express.Router();
import channelController from './channel.controller.js';
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
router.post('/', channelController.createChannel);

export default router;
