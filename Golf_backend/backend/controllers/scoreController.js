export const getAllScoresAdmin = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.name, s.score, s.created_at
      FROM scores s
      JOIN users u ON u.id = s.user_id
      ORDER BY s.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};