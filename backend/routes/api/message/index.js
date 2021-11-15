import express from 'express';
const router = express.Router();
import { createMessage } from './message.controller.js';
/**
 *  @swagger
 *  /channel/:id/message:
 *      post:
 *          description: 특정 채팅에서 메시지 작성
 *          produces:
 *              - http status
 *          parameters:
 *            - in: path
 *              schema:
 *                  name: id
 *                  type: integer
 *                  required: true
 *                  description: channel(chat) id
 *            - in: body
 *              schema:
 *                  type: object
 *                  required:
 *                      - sender_id
 *                      - content
 *                  properties:
 *                      sender_id:
 *                          type: integer
 *                      content:
 *                          type: string
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/get/200/pet'
 *
 */
router.post('/channel/:id/message', createMessage);

export default router;
