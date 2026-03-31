import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Total users
    const users = await pool.query("SELECT COUNT(*) FROM users");

    // Total winners (draws)
    const draws = await pool.query("SELECT COUNT(*) FROM winners");

    // Charity total
    const charity = await pool.query(
      "SELECT COALESCE(SUM(amount),0) AS total FROM charity_donations"
    );

    // Revenue (example: assume subscription = users * 1000)
    const revenue = await pool.query("SELECT COUNT(*) FROM users");

    res.json({
      totalUsers: users.rows[0].count,
      totalDraws: draws.rows[0].count,
      charityGiven: charity.rows[0].total,
      totalRevenue: revenue.rows[0].count * 1000
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;