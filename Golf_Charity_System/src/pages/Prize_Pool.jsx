import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Prize_Pool() {
  const prizes = [
    { place: "1st Prize", amount: "₹50,000", desc: "Winner of the draw" },
    { place: "2nd Prize", amount: "₹25,000", desc: "Runner-up" },
    { place: "3rd Prize", amount: "₹10,000", desc: "Third position" },
    { place: "Lucky Draw", amount: "₹5,000", desc: "Random selected winner" },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Prize Pool</h1>

      <Row>
        {prizes.map((item, index) => (
          <Col md={3} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <Card.Title>{item.place}</Card.Title>
                <h3 className="text-success">{item.amount}</h3>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Prize_Pool;