import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <div
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          height: "80vh",
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1592919505780-303950717480') center/cover",
        }}
      >
        <div>
          <h1 className="fw-bold display-4">
            Play Golf. Win Big. Give Back ❤️
          </h1>
          <p className="lead">
            Join the ultimate golf subscription platform with monthly prize draws & charity impact.
          </p>

          <Button
            variant="success"
            size="lg"
            className="me-3"
            onClick={() => navigate("/subscription")}
          >
            Subscribe Now
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            onClick={() => navigate("/score")}
          >
            Enter Scores
          </Button>
        </div>
      </div>

      {/* FEATURES */}
      <Container className="mt-5">

        <Row className="text-center mb-4">
          <h2 className="fw-bold">Why Join Our Platform?</h2>
        </Row>

        <Row className="g-4">

          <Col md={4}>
            <Card className="shadow h-100 border-0 text-center p-3"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
              onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
            >
              <h2>🏌️</h2>
              <Card.Title>Track Performance</Card.Title>
              <Card.Text>
                Enter your last 5 golf scores and track your performance easily.
              </Card.Text>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow h-100 border-0 text-center p-3"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
              onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
            >
              <h2>🎯</h2>
              <Card.Title>Monthly Draws</Card.Title>
              <Card.Text>
                Participate in monthly lucky draws and win exciting prizes.
              </Card.Text>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow h-100 border-0 text-center p-3"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.05)"}
              onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}
            >
              <h2>❤️</h2>
              <Card.Title>Support Charity</Card.Title>
              <Card.Text>
                A portion of your subscription goes to your selected charity.
              </Card.Text>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* CTA SECTION */}
      <div
        className="text-center text-white mt-5 p-5"
        style={{
          background: "linear-gradient(135deg, #11998e, #38ef7d)",
        }}
      >
        <h2 className="fw-bold">Start Your Journey Today 🚀</h2>
        <p>Subscribe now and be part of something bigger</p>

        <Button
          variant="light"
          size="lg"
          onClick={() => navigate("/subscription")}
        >
          Get Started
        </Button>
      </div>

    </div>
  );
}

export default Home;