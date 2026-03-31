import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// GET ALL WINNERS
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, created_at FROM winners ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;