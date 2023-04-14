import express from 'express';
import {
    login,
    register,
    sendEmail,
    getCode,
    resetPassword,
    deleteCode,
    getJoinCodes,
} from '../controllers/authController.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/request', sendEmail);
router.patch('/getCode/:id', getCode);
router.post('/reset', resetPassword);
router.delete('/deleteCode/:id', deleteCode);
router.get('/:id', getJoinCodes);

export default router;
