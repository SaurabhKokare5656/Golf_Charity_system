import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HomeAdmin() {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Users", value: "1,245", color: "#0d6efd" },
    { title: "Active Draws", value: "3", color: "#198754" },
    { title: "Prize Pool", value: "₹2,50,000", color: "#ffc107" },
    { title: "Charity Fund", value: "₹1,10,000", color: "#dc3545" },
  ];

  const actions = [
    { name: "Manage Users", path: "/admin/Users" },
    { name: "Start Draw", path: "/admin/Draw" },
    { name: "View Winners", path: "/admin/WinnersAdmin" },
    { name: "Reports", path: "/admin/Reports" },
  ];

  return (
    <Container className="mt-4">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-4">🏌️ Golf Charity Admin Dashboard</h2>
        <p>Manage users, draws, prize pools and charity donations in real time.</p>
      </motion.div>

      {/* Stats Cards */}
      <Row className="g-3">
        {stats.map((item, index) => (
          <Col md={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <h6>{item.title}</h6>
                  <h3 style={{ color: item.color }}>{item.value}</h3>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Quick Actions */}
      <h4 className="mt-5 mb-3">⚡ Quick Actions</h4>

      <Row className="g-3">
        {actions.map((act, i) => (
          <Col md={3} key={i}>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <h6>{act.name}</h6>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => navigate(act.path)}
                  >
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

    </Container>
  );
}

export default HomeAdmin;