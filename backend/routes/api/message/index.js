import express from 'express';
const router = express.Router();
import { createMessage } from './message.controller.js';
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
router.post('/channel/:id/message', createMessage);

export default router;
