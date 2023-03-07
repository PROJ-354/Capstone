import express from 'express';
import { getUsersWeeks, getWeek, updateWeek } from '../controllers/weekController.js';

const router = express.Router();

//GET a single week
router.get('/:id', getWeek);

//POST a new master week
router.post('/master');

//POST a new week based on a master week
router.post('/:id');

//router.post('/',);

//PATCH a week
router.patch('/:id', updateWeek);

//DELETE a week
router.delete('/:id');

//GET all of a user's weeks
router.get('/user/:id', getUsersWeeks);

export default router;
