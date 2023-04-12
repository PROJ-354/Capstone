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
} from '../controllers/UserController.js';
import authorize from '../middleware/authorize.js';

// import middleware functions
// blah blah blah

// router.get('/', authorize, getAllUsers);
router.get('/', getAllUsers);
router.get('/email', getUserByEmail);
router.get('/preceptors', getAllPreceptors);
router.get('/:id', getUserById);
router.put('/:id', updateUserEmail);

export default router;
