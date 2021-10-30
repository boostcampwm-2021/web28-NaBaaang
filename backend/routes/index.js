import express from 'express';
var router = express.Router();

/**
 * @swagger
 *
 * /:
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
router.get("/", function (req, res, next) {
    res.json({
        message: "success",
        data: {},
    });
});

export default router;
