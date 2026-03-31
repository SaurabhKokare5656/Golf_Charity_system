import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

export default function Reports() {
  const [data, setData] = useState({
    totalUsers: 0,
    totalDraws: 0,
    totalRevenue: 0,
    charityGiven: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reports")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-4">

      <h3>📊 Reports Dashboard</h3>

      <Card className="p-3 shadow">

        <p>👥 Total Users: {data.totalUsers}</p>

        <p>🎰 Total Draws: {data.totalDraws}</p>

        <p>💰 Total Revenue: ₹{data.totalRevenue}</p>

        <p>💚 Charity Given: ₹{data.charityGiven}</p>

      </Card>

    </Container>
  );
}