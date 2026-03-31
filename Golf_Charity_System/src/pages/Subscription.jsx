import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Subscription() {
  const [selected, setSelected] = useState("");

  const { user, login } = useContext(AuthContext); // 🔥 important

  const handleSubscribe = () => {
    if (!selected) {
      alert("Please select a plan");
      return;
    }

    // 🔥 user update (subscription ON)
    const updatedUser = {
      ...user,
      isSubscribed: true,
    };

    login(updatedUser); // 🔥 context update

    alert(`Subscribed to ${selected} plan 🎉`);
  };

  return (
    <div>

      {/* HERO */}
      <div
        className="text-center text-white p-5"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
        }}
      >
        <h1 className="fw-bold">Choose Your Plan 💳</h1>
        <p>Play golf, win rewards & support charity</p>
      </div>

      <Container className="mt-5">
        <Row className="g-4">

          {/* Monthly */}
          <Col md={6}>
            <Card
              className={`shadow-lg p-4 text-center ${
                selected === "monthly" ? "border border-primary border-3" : ""
              }`}
              onClick={() => setSelected("monthly")}
              style={{ cursor: "pointer", transition: "0.3s" }}
            >
              <Card.Body>
                <h3>📅 Monthly</h3>
                <h1 className="text-primary">₹499</h1>

                {selected === "monthly" && <Badge bg="primary">Selected</Badge>}
              </Card.Body>
            </Card>
          </Col>

          {/* Yearly */}
          <Col md={6}>
            <Card
              className={`shadow-lg p-4 text-center ${
                selected === "yearly" ? "border border-success border-3" : ""
              }`}
              onClick={() => setSelected("yearly")}
              style={{ cursor: "pointer", transition: "0.3s" }}
            >
              <Card.Body>
                <h3>🏆 Yearly</h3>
                <h1 className="text-success">₹4999</h1>

                {selected === "yearly" && <Badge bg="success">Selected</Badge>}
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <div className="text-center mt-5">
          <Button variant="dark" size="lg" onClick={handleSubscribe}>
            Subscribe Now 🚀
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Subscription;