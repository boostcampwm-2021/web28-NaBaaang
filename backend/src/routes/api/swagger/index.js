import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const router = express.Router();
const swaggerSpec = YAML.load(path.resolve('swagger/build', 'bundle.yaml'));

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));

export default router;
