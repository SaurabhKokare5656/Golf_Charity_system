import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// GET ALL USERS
router.get("/users", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, status FROM users ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;