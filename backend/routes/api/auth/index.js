import express from 'express';
const router = express.Router();
import authController from './auth.controller.js';

router.post('/login', authController.login);
router.get('/token/validation', authController.getAuthValidation);

export default router;
