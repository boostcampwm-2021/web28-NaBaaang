import express from 'express';
const router = express.Router();
import messageController from '@/routes/api/message/message.controller.js';
/**
 *  @swagger
 *  /chats/:id/message:
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
 *                  description: chat id
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
router.post('/:id/message', messageController.createMessage);

export default router;
