import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Charity() {
  return (
    <Container className="mt-5">

      {/* HEADER */}
      <Card className="text-center text-white p-4 mb-4"
        style={{ background: "linear-gradient(135deg, #ff512f, #dd2476)" }}>
        <h2>❤️ Support Charity</h2>
        <p>Your subscription helps make a difference</p>
      </Card>

      {/* CHARITIES */}
      <Row className="g-4">

        <Col md={4}>
          <Card className="shadow p-3 text-center hover-card">
            <h5>Education Fund</h5>
            <p>Helping underprivileged students</p>
            <Button variant="primary">Donate</Button>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow p-3 text-center hover-card">
            <h5>Health Support</h5>
            <p>Medical help for needy people</p>
            <Button variant="success">Donate</Button>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow p-3 text-center hover-card">
            <h5>Environment</h5>
            <p>Tree plantation & clean earth</p>
            <Button variant="warning">Donate</Button>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Charity;