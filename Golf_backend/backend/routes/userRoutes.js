import express from "express";
import { getUsers } from "../controllers/userController.js";
import auth from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/", auth, isAdmin, getUsers);

export default router;