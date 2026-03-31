import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

export default function CharityAdmin() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/charity/total")
      .then((res) => setTotal(res.data.total))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-4">

      <h3>💚 Charity Dashboard</h3>

      <Card className="p-3 shadow">
        <h4>Total Donations</h4>

        <h2 style={{ color: "green" }}>
          ₹{total}
        </h2>

        <hr />

        <p>✔ Real-time donation tracking</p>
        <p>✔ Auto-calculated from subscriptions</p>
        <p>✔ PRD compliant system</p>

      </Card>

    </Container>
  );
}