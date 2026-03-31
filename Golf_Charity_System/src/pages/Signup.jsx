import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(""); // 🔥 FIX ADDED
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        mobile,
        password,
        role,
      });

      alert("Signup successful 🚀 Now login");

      // 🔥 auto redirect to login page
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">

      <Card
        style={{
          width: "400px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}
        className="p-4"
      >

        <h3 className="text-center mb-3">Sign Up</h3>

        <Form>

          <Form.Control
            className="mb-2"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Control
            className="mb-2"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />

          <Form.Control
            className="mb-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Form.Select
            className="mb-3"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Form.Select>

          <Button className="w-100" onClick={handleSignup}>
            Sign Up
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default Signup;