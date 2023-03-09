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

router.get('/api/schedules/:studentID', 
    getScheduleByStudentId);

router.put('/api/schedules/:studentID/week/:weekNumber',
    updateWeek);

router.put('/api/schedules/submit/:studentID',
    sumbitSchedule);

router.put('/api/schedules/unsubmit/:studentID',
    unsumbitSchedule);

router.put('/api/schedules/approve/:studentID',
    approveSchedule);

router.put('/api/schedules/unapprove/:studentID',
    unapproveSchedule);

export default router;
