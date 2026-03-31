import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

export default function WinnersAdmin() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/winners")
      .then((res) => setWinners(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-4">

      <h3>🏆 Winners Board</h3>

      {winners.length === 0 ? (
        <p>No winners yet</p>
      ) : (
        winners.map((w) => (
          <motion.div key={w.id} whileHover={{ scale: 1.05 }}>
            <Card className="my-2 p-3 shadow-sm">
              <h5>👤 {w.name}</h5>
              <p>📅 {new Date(w.created_at).toLocaleString()}</p>
            </Card>
          </motion.div>
        ))
      )}

    </Container>
  );
}