import express from "express";
import { login, register } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/api/auth/login", login);
router.post("/api/auth/register", register);

export default router;
