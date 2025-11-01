import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Stack,
} from "@mui/material";

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: "", email: "" });
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Paper sx={{ p: 2, background: "transparent" }}>
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          label="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddUser}
          sx={{ minWidth: "120px" }}
        >
          Add User
        </Button>
      </Stack>

      <TableContainer component={Paper} sx={{ background: "rgba(0,0,0,0.6)" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#00E676", fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ color: "#00E676", fontWeight: 600 }}>Email</TableCell>
              <TableCell sx={{ color: "#00E676", fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ color: "#E0E0E0" }}>{user.name}</TableCell>
                <TableCell sx={{ color: "#E0E0E0" }}>{user.email}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
