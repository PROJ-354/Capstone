import express from "express";
import { getEvals, createEval, getMasterEval, deleteEval, getEval, editEval } from "../controllers/PreceptorController.js";

const router = express.Router();

router.get('/', getEvals);

router.get('/eval', getMasterEval)

router.post('/eval', createEval);

router.delete('/:evalId', deleteEval)

router.get('/:evalId', getEval)

router.put('/:evalId', editEval)

export default router;
