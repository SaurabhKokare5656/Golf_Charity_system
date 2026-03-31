import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Form, Badge, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/admin/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const blockUser = (id) => {
    axios.put(`http://localhost:5000/api/admin/users/block/${id}`)
      .then(() => fetchUsers());
  };

  const approveUser = (id) => {
    axios.put(`http://localhost:5000/api/admin/users/approve/${id}`)
      .then(() => fetchUsers());
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.mobile?.toString().includes(search)
  );

  return (
    <Container className="mt-4">

      {/* HEADER */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3>👥 Users Management</h3>
        <p>Total Users: <b>{users.length}</b></p>
      </motion.div>

      {/* SEARCH */}
      <Form.Control
        className="my-3"
        placeholder="Search by name or mobile..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE CARD */}
      <Card className="shadow-sm">
        <Card.Body>

          <Table responsive hover bordered>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.mobile}</td>

                  <td>
                    {u.status === "Active" ? (
                      <Badge bg="success">Active</Badge>
                    ) : (
                      <Badge bg="danger">Blocked</Badge>
                    )}
                  </td>

                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      className="me-2"
                      onClick={() => blockUser(u.id)}
                    >
                      Block
                    </Button>

                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => approveUser(u.id)}
                    >
                      Approve
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </Card.Body>
      </Card>

    </Container>
  );
}