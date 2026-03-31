import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        mobile,
        password,
        role,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        navigate("/HomeAdmin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">

      <Card style={{ width: "400px" }} className="p-4 shadow">

        <h3 className="text-center mb-3">Login</h3>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Select Role</Form.Label>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </Form.Group>

          <Button className="w-100" onClick={handleLogin}>
            Login
          </Button>

          

{/* 🔥 SIGNUP LINK */}
<p className="text-center mt-3">
  Don’t have an account?{" "}
  <Link to="/signup" style={{ textDecoration: "none" }}>
    Sign Up
  </Link>
</p>

        </Form>

      </Card>

    </Container>
  );
}

export default Login;