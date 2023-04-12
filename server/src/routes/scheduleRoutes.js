/**
 * this module exports a Router that contains all the endpoints for the Schedule resource
 */
import express from 'express';
const router = express.Router();

// import controller functions
import {
    getScheduleByStudentId,
    updateWeek,
    sumbitSchedule,
    unsumbitSchedule,
    approveSchedule,
    unapproveSchedule,
} from '../controllers/scheduleController.js';

import authorize from '../middleware/authorize.js';

router.get('/student/:studentEmail', getScheduleByStudentId);

router.put('/:studentEmail/:weekNumber', updateWeek);

router.put('/student/submit/:studentEmail', sumbitSchedule);

router.put('/unsubmit/:studentEmail', unsumbitSchedule);

router.put('/student/approve/:studentEmail', approveSchedule);

router.put('/student/unapprove/:studentEmail', unapproveSchedule);

export default router;
