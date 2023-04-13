import express from 'express';
import {
    addMasterWeek,
    createWeek,
    deleteWeek,
    getUsersWeeks,
    getWeek,
    submitPreceptorWeek,
    submitWeek,
    updateInstructorWeek,
    updatePreceptorWeek,
    updateWeek,
} from '../controllers/weekController.js';

const router = express.Router();

//GET a single week by the week's ID
router.get('/:id', getWeek);

//ADD a new master week
router.post('/master', addMasterWeek);

//ADD a new week based on a master week's ID
router.post('/:id', createWeek);

//UPDATE a week based on it's ID
router.patch('/:id', updateWeek);

//UPDATE a week based on it's ID with information from the Preceptor
router.patch('/preceptor/:id', updatePreceptorWeek);

//UPDATE AND SUBMIT a week based on it's ID with a grade from the instructor
router.patch('/instructor/:id', updateInstructorWeek);

//SUBMIT a week to a preceptor
router.patch('/submit/:id', submitWeek);

//SUBMIT a week to an instructor by the preceptor
router.patch('/submit/preceptor/:id', submitPreceptorWeek);

//DELETE a week
// router.delete('/:id', deleteWeek);

//GET all of a user's weeks
router.get('/user/:id', getUsersWeeks);

export default router;
