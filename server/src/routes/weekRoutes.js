import express from 'express';
import {
    addMasterWeek,
    createWeek,
    deleteWeek,
    getUsersWeeks,
    getWeek,
    submitWeek,
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

//SUBMIT a week to a preceptor
router.patch('/submit/:id', submitWeek);

//DELETE a week
// router.delete('/:id', deleteWeek);

//GET all of a user's weeks
router.get('/user/:id', getUsersWeeks);

export default router;
