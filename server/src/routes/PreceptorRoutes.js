import express from 'express';
import {
    getEvals,
    createEval,
    getMasterEval,
    deleteEval,
    getEval,
    editEval,
    getStudentEvals,
} from '../controllers/PreceptorController.js';

const router = express.Router();

router.get('/home/:userId', getEvals);

router.get('/studentEvals/:studentId', getStudentEvals)

router.post('/eval', createEval);

router.get('/eval', getMasterEval);

router.delete('/:evalId', deleteEval);

router.get('/:evalId', getEval);

router.put('/:evalId', editEval);

export default router;
