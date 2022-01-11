import React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContractsTable = () => {
  return (
  <Container>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Document Number</TableCell>
          <TableCell>Social Rason</TableCell>
          <TableCell>Company</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>1234567890</TableCell>
          <TableCell>Razão Social 1</TableCell>
          <TableCell>Company 1</TableCell>
          <TableCell align="center">
            <IconButton onClick={() => console.log("edited")}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => console.log("deleted")}>
              <DeleteIcon color="error" />
            </IconButton>
          </TableCell>
        </TableRow>

      </TableBody>
    </Table>
  </Container>
  )
};

export default ContractsTable;
