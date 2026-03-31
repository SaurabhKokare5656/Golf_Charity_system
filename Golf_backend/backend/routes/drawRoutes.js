import express from "express";
import { runDraw } from "../controllers/drawController.js";
import auth from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/run", auth, isAdmin, runDraw);

export default router;