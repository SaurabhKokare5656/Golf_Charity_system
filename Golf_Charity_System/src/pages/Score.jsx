import React, { useState, useContext } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";


function Score() {
  const { user } = useContext(AuthContext);

  const [score, setScore] = useState("");
  const [scores, setScores] = useState([]);

  const isSubscribed = user?.isSubscribed; // 🔥 important

  const addScore = () => {
    if (!score || score < 1 || score > 45) {
      alert("Enter valid score (1-45)");
      return;
    }

    let updated = [...scores, { value: score, date: new Date() }];

    if (updated.length > 5) {
      updated.shift(); // last 5 logic
    }

    setScores(updated);
    setScore("");
  };

  return (
    <Container className="mt-5">

      {/* HEADER */}
      <Card
        className="p-4 text-center text-white mb-4"
        style={{
          background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        }}
      >
        <h2>⛳ Enter Your Golf Scores</h2>
        <p>Track your last 5 performances</p>
      </Card>

      {/* ❌ NOT SUBSCRIBED */}
      {!isSubscribed && (
        <Alert variant="danger" className="text-center">
          🚫 You need an active subscription to enter scores.
          <br />
          Please subscribe to continue.
        </Alert>
      )}

      {/* INPUT CARD */}
      <Card
        className="shadow p-4 mb-4"
        style={{
          opacity: isSubscribed ? 1 : 0.6,
          transition: "0.3s",
        }}
      >
        <Form>
          <Form.Group>
            <Form.Label>Enter Score (1 - 45)</Form.Label>
            <Form.Control
              type="number"
              value={score}
              disabled={!isSubscribed} // 🔥 restriction
              onChange={(e) => setScore(e.target.value)}
            />
          </Form.Group>

          <Button
            className="mt-3"
            variant="primary"
            disabled={!isSubscribed}
            onClick={addScore}
          >
            Add Score
          </Button>
        </Form>
      </Card>

      {/* SCORE LIST */}
      <Card className="shadow p-4">
        <h4>📊 Last 5 Scores</h4>

        {scores.length === 0 ? (
          <p className="text-muted">No scores added yet</p>
        ) : (
          <ul className="list-group">
            {scores
              .slice()
              .reverse()
              .map((s, i) => (
                <li key={i} className="list-group-item">
                  Score: {s.value} | Date:{" "}
                  {new Date(s.date).toLocaleDateString()}
                </li>
              ))}
          </ul>
        )}
      </Card>
    </Container>
  );
}

export default Score;