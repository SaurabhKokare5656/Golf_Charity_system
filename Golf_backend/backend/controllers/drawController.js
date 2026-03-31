import pool from "../config/db.js";

export const runDraw = async (req, res) => {
  try {
    const users = await pool.query(`
      SELECT u.id, u.name, AVG(s.score) as avg_score
      FROM users u
      JOIN scores s ON u.id = s.user_id
      WHERE u.status='Active' AND u.is_subscribed=true
      GROUP BY u.id
    `);

    if (users.rows.length === 0) {
      return res.status(400).json({ message: "No eligible users" });
    }

    // sort by best performance (LOW score = better in golf)
    const sorted = users.rows.sort((a, b) => a.avg_score - b.avg_score);

    const winner = sorted[0]; // BEST PLAYER WINS

    await pool.query(
      `INSERT INTO winners (user_id, name, score)
       VALUES ($1,$2,$3)`,
      [winner.id, winner.name, winner.avg_score]
    );

    res.json({
      message: "Draw completed",
      winner,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};