import React, { useContext } from "react";
import { Container, Row, Col, Card, Button, Alert, Badge } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Draw_System() {
  const { user } = useContext(AuthContext);

  const isSubscribed = user?.isSubscribed;
  const hasScores = true; // 🔥 later backend se check kar (for now true)

  const eligible = isSubscribed && hasScores;

  return (
    <Container className="mt-5">

      {/* HEADER */}
      <Card
        className="text-center text-white p-4 mb-4"
        style={{
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
        }}
      >
        <h2>🎯 Monthly Lucky Draw</h2>
        <p>Play • Compete • Win Big Prizes</p>
      </Card>

      {/* ELIGIBILITY */}
      {!eligible && (
        <Alert variant="danger" className="text-center">
          🚫 You are not eligible for this draw.
          <br />
          👉 Complete subscription & add scores to participate.
        </Alert>
      )}

      {eligible && (
        <Alert variant="success" className="text-center">
          ✅ You are eligible for this month's draw!
        </Alert>
      )}

      {/* DRAW INFO */}
      <Row className="g-4">

        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h4>📅 Draw Date</h4>
            <p>30th April 2026</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h4>💰 Prize Pool</h4>
            <p>₹1,00,000</p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center p-3">
            <h4>👥 Participants</h4>
            <p>120 Users</p>
          </Card>
        </Col>

      </Row>

      {/* CTA */}
      <div className="text-center mt-5">
        <Button
          size="lg"
          variant={eligible ? "success" : "secondary"}
          disabled={!eligible}
        >
          {eligible ? "Participating ✅" : "Not Eligible ❌"}
        </Button>
      </div>

      {/* LAST WINNERS */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow p-4">
            <h4 className="text-center mb-3">🏆 Last Winners</h4>

            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between">
                Rahul Sharma <Badge bg="success">₹50,000</Badge>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                Priya Patel <Badge bg="primary">₹30,000</Badge>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                Aman Verma <Badge bg="warning">₹20,000</Badge>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* INFO */}
      <div
        className="text-center text-white mt-5 p-4"
        style={{
          background: "linear-gradient(135deg, #11998e, #38ef7d)",
        }}
      >
        <h5>⚡ Fair & Transparent Draw System</h5>
        <p>
          Winners are selected randomly based on verified scores and active subscriptions.
        </p>
      </div>

    </Container>
  );
}

export default Draw_System;