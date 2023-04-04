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

router.get('/:studentID', getScheduleByStudentId);

router.put('/:studentID/:weekNumber', updateWeek);

router.put('/student/submit/:studentID', sumbitSchedule);

router.put('/unsubmit/:studentID', unsumbitSchedule);

router.put('/approve/:studentID', approveSchedule);

router.put('/unapprove/:studentID', unapproveSchedule);

export default router;
