import express from 'express';
const router = express.Router();
import authController from './auth.controller.js';

router.post('/login', authController.login);
router.get('/token/validation', authController.auth, authController.getAuthValidation);

export default router;
