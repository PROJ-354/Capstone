import express from "express";
import { login, register, sendEmail, getCode, resetPassword } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/api/auth/login", login);
router.post("/api/auth/register", register);
router.post("/api/auth/request", sendEmail);
router.patch("/api/auth/getCode/:id", getCode);
router.post("/api/auth/reset", resetPassword);

export default router;
