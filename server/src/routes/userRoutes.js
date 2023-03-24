/**
 * this module exports a Router that contains all the endpoints for the User resource
 */
import express from 'express';
const router = express.Router();

// import controller functions
import {
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUserEmail,
    getAllPreceptors,
} from '../controllers/userController.js';
import authorize from '../middleware/authorize.js';

// import middleware functions
// blah blah blah

router.get('/', authorize, getAllUsers);
router.get('/user', getUserByEmail);
router.get('/user/:id', getUserById);
router.put('/:id', updateUserEmail);
router.get('/preceptors', getAllPreceptors);

export default router;
