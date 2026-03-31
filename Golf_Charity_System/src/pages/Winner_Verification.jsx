import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

function Winner_Verification() {
  return (
    <Container className="mt-5">

      {/* HEADER */}
      <Card className="text-center text-white p-4 mb-4"
        style={{ background: "linear-gradient(135deg, #43cea2, #185a9d)" }}>
        <h2>🏆 Winner Verification</h2>
        <p>Check previous winners and verification status</p>
      </Card>

      {/* WINNERS */}
      <Row className="g-4">

        <Col md={4}>
          <Card className="shadow p-3 text-center hover-card">
            <h5>Rahul Sharma</h5>
            <p>Score: 38</p>
            <Badge bg="success">Verified ✅</Badge>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow p-3 text-center hover-card">
            <h5>Priya Patel</h5>
            <p>Score: 40</p>
            <Badge bg="warning">Pending ⏳</Badge>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow p-3 text-center hover-card">
            <h5>Aman Verma</h5>
            <p>Score: 36</p>
            <Badge bg="danger">Rejected ❌</Badge>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Winner_Verification;