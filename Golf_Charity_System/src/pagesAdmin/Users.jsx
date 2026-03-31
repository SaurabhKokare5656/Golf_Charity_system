import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:5000/api/admin/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
}, []);

  return (
    <Container className="mt-4">

      <motion.h3 initial={{opacity:0}} animate={{opacity:1}}>
        👥 Users Management
      </motion.h3>

      <Form.Control className="my-3" placeholder="Search users..." />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.status}</td>
              <td>
                <Button size="sm" variant="danger">Block</Button>{" "}
                <Button size="sm" variant="success">Approve</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  );
}