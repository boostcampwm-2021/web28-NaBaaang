import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
const router = express.Router();
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: [
        path.resolve('routes', 'index.js'),
        path.resolve('routes/api/message', 'index.js'),
        path.resolve('routes/api/message/swagger', 'components.js'),
    ], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(openapiSpecification));

export default router;
