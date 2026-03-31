const express = require("express");
const router = express.Router();
const db = require("../config/db.js");

// ADD SCORE
router.post("/add", async (req, res) => {
  const { user_id, score } = req.body;

  const result = await db.query(
    "INSERT INTO scores (user_id, score) VALUES ($1,$2) RETURNING *",
    [user_id, score]
  );

  res.json(result.rows[0]);
});

// GET USER SCORES
router.get("/:user_id", async (req, res) => {
  const result = await db.query(
    "SELECT * FROM scores WHERE user_id=$1 ORDER BY created_at DESC LIMIT 5",
    [req.params.user_id]
  );

  res.json(result.rows);
});

module.exports = router;