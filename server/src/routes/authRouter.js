import express from "express";
import { login, register, sendEmail, resetPassword } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/api/auth/login", login);
router.post("/api/auth/register", register);
router.get("/api/auth/forgot", sendEmail);
router.post("/api/auth/reset", resetPassword);

export default router;
