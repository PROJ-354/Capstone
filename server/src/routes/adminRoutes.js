import {
    generateInstructorCode,
    resetJoinCode,
} from '../controllers/AdminController.js';

import express from 'express';
const router = express.Router();

router.post('/code/instructor', generateInstructorCode);
router.post('/code/reset', resetJoinCode);

export default router;
