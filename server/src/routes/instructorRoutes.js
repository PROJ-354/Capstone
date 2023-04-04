import {
    generateStudentCode,
    generatePreceptorCode,
    resetJoinCode,
} from '../controllers/instructorController.js';
import express from 'express';
const router = express.Router();

router.post('/code/student', generateStudentCode);
router.post('/code/preceptor', generatePreceptorCode);
router.post('/code/reset', resetJoinCode);

export default router;
