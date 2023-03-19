import express from 'express';
import {
    login,
    register,
    sendEmail,
    getCode,
    resetPassword,
    deleteCode,
} from '../controllers/authController.js';
const router = express.Router();

router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.post('/api/auth/request', sendEmail);
router.patch('/api/auth/getCode/:id', getCode);
router.post('/api/auth/reset', resetPassword);
router.delete('/api/auth/deleteCode/:id', deleteCode);

export default router;
