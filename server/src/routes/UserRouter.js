/**
 * this module exports a Router that contains all the endpoints for the User resource
 */
import express from "express";
const router = express.Router();

// import controller functions
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
import authorize from "../middleware/authorize.js";

// import middleware functions
// blah blah blah

router.get("/api/users", authorize, getAllUsers);
router.post("/api/users", createUser);
router.put("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);

export default router;
