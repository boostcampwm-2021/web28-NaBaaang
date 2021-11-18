/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       required:
 *         - content
 *         - chat_id
 *         - sender_id
 *       properties:
 *         id:
 *           type: integer
 *           description: auto-increment id
 *         content:
 *           type: String
 *           description: 메시지 내용
 *         chat_id:
 *           type: integer
 *           description: 메시지가 작성된 채팅(채널) id
 *         sender_id:
 *           type: integer
 *           description: 메시지를 작성한 유저 id
 */
