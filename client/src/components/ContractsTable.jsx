import React, { useEffect, useState } from 'react';
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
  const [contracts, setContracts] = useState([]);
  console.log(contracts);

  const recoverContractsFromLocalStorage = async() => {
    const contractsList = await JSON.parse(localStorage.getItem('contracts'));
    console.log(`CL:${contractsList}`)
    setContracts(contractsList);
  };

  useEffect(() => {
    recoverContractsFromLocalStorage();
  }, []);

  return (
  <Container>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Document Number</TableCell>
          <TableCell>Social Reason</TableCell>
          <TableCell>Company</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { contracts.map(({ documentNumber, socialReason, company: { name } }, index) => (
          <TableRow
            key={ index }
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{ documentNumber }</TableCell>
            <TableCell>{ socialReason }</TableCell>
            <TableCell>{ name }</TableCell>
            <TableCell align="center">
              <IconButton onClick={() => console.log("edited")}>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => console.log("deleted")}>
                <DeleteIcon color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        )) }
      </TableBody>
    </Table>
  </Container>
  )
};

export default ContractsTable;
