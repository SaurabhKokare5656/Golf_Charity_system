import pool from "../config/db.js";

// GET USERS
export const getUsers = async (req, res) => {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  res.json(result.rows);
};