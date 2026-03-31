export const uploadProof = async (req, res) => {
  const { winner_id, proof } = req.body;

  await pool.query(
    `UPDATE winners SET proof=$1, status='submitted' WHERE id=$2`,
    [proof, winner_id]
  );

  res.json({ message: "Proof submitted" });
};