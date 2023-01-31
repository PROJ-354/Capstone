import express from 'express';

const router = express.Router();

//GET a single week
router.get('/:id');

//POST a new master week
router.post('/master');

//POST a new week based on a master week
router.post('/:id');

//PATCH a week
router.patch('/:id');

//DELETE a week
router.delete('/:id');

export default router;
