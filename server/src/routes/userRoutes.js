/**
 * this module exports a Router that contains all the endpoints for the User resource
 */
import express from 'express';
const router = express.Router();

// import controller functions
import {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getAllPreceptors,
} from '../controllers/userController.js';
import authorize from '../middleware/authorize.js';

// import middleware functions
// blah blah blah

router.get('/', authorize, getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.get('/preceptors', getAllPreceptors);

export default router;
