import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// GET TOTAL DONATIONS
router.get("/total", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT SUM(amount) AS total FROM charity_donations"
    );

    res.json({
      total: result.rows[0].total || 0
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;