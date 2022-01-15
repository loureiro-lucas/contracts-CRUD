import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import ContractsContext from '../context/ContractsContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ContractsTable = () => {
  const {
    contractsListFiltered,
    deleteContract,
  } = useContext(ContractsContext);

  return (
  <Container>
    <Table sx={{ minWidth: 1000 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Document Number</TableCell>
          <TableCell>Social Reason</TableCell>
          <TableCell>Company</TableCell>
          <TableCell align="center" sx={{ width: "120px" }}>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        { contractsListFiltered.map(({ documentNumber, socialReason, company: { name } }, index) => (
          <TableRow
            key={ index }
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{ documentNumber }</TableCell>
            <TableCell>{ socialReason }</TableCell>
            <TableCell>{ name }</TableCell>
            <TableCell align="center">
              <IconButton>
                <EditIcon color="primary" />
              </IconButton>
              <IconButton onClick={ () => deleteContract(index) }>
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
