import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NewContractContext from '../context/NewContractContext';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const ContractsProducts = () => {
  const {
    newProductInput,
    handleNewProductInputs,
    handleAddProductButton,
    contractProducts,
    removeProducts,
  } = useContext(NewContractContext);

  const productsList = [
    'Produto 1',
    'Produto 2',
    'Produto 3',
    'Produto 4',
    'Produto 5',
    'Produto 6',
    'Produto 7',
    'Produto 8',
    'Produto 9',
    'Produto 10',
  ];

  const renderNewProductForm = () => (
    <form
    onSubmit={ handleAddProductButton }
    autoComplete='off'
  >
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      minWidth: "1000px",
    }}>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ flexGrow: 1, minWidth: "250px" }}>
          <InputLabel id="product-label">Product</InputLabel>
          <Select
            labelId="product-label"
            name="product"
            label="Product"
            value={ newProductInput.product }
            size="small"
            sx={{ m: 1 }}
            onChange={ handleNewProductInputs }
            >
              <MenuItem disabled value={''}></MenuItem>
              {
                productsList.map((product) => (
                  <MenuItem key={ product } value={ product }>{ product }</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        <TextField
          type="number"
          name="amount"
          label="Amount"
          variant="outlined"
          size="small"
          sx={{ m: 1, flexGrow: 1 }}
          value={ newProductInput.amount }
          onChange={ handleNewProductInputs }
        />
        <TextField
          type="number"
          name="finalUnitPrice"
          label="Final Unit Price"
          variant="outlined"
          size="small"
          sx={{ m: 1, flexGrow: 1 }}
          value={ newProductInput.finalUnitPrice }
          onChange={ handleNewProductInputs }
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField
          type="number"
          name="installments"
          label="Installments"
          variant="outlined"
          size="small"
          sx={{ m: 1, flexGrow: 1 }}
          value={ newProductInput.installments }
          onChange={ handleNewProductInputs }
        />
        <TextField
          type="number"
          name="paidInstallments"
          label="Paid Installments"
          variant="outlined"
          size="small"
          sx={{ m: 1, flexGrow: 1 }}
          value={ newProductInput.paidInstallments }
          onChange={ handleNewProductInputs }
        />
        <TextField
          type="date"
          name="beginningOfTerm"
          label="Beginning Of Term"
          variant="outlined"
          size="small"
          sx={{ m: 1, flexGrow: 1 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={ newProductInput.beginningOfTerm }
          onChange={ handleNewProductInputs }
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ m: 1, height: "40px" }}
        >
          Add
        </Button>
      </Box>
    </Container>
  </form>
  );

  const renderProductsTable = () => (
    <Container
      sx={{
        minWidth: 1000,
        my: 2,
      }}
    >
      <Table
        aria-label="simple table"
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: "100px" }}>Product</TableCell>
            <TableCell sx={{ width: "80px" }}>Amount</TableCell>
            <TableCell sx={{ width: "160px" }}>{ 'Final Unit Price(R$)' }</TableCell>
            <TableCell sx={{ width: "110px" }}>Installments</TableCell>
            <TableCell sx={{ width: "150px" }}>Paid Installments</TableCell>
            <TableCell sx={{ width: "150px" }}>Beginning of Term</TableCell>
            <TableCell align="center" sx={{ width: "120px" }}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { contractProducts.map(({ product, amount, finalUnitPrice, installments, paidInstallments, beginningOfTerm }, index) => (
            <TableRow
              key={ index }
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{ product }</TableCell>
              <TableCell sx={{ textAlign: "end" }}>{ amount }</TableCell>
              <TableCell sx={{ textAlign: "end" }}>{ finalUnitPrice }</TableCell>
              <TableCell sx={{ textAlign: "end" }}>{ installments }</TableCell>
              <TableCell sx={{ textAlign: "end" }}>{ paidInstallments }</TableCell>
              <TableCell sx={{ textAlign: "end" }}>{ beginningOfTerm }</TableCell>
              <TableCell align="center">
                <IconButton>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={() => removeProducts(index)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </Container>
  )

  return (
    <Container>
      <Typography variant="h5" component="h1" my={ 2 }>
        Contract's Products
      </Typography>
      { renderNewProductForm() }
      { renderProductsTable() }
    </Container>
  );
};

export default ContractsProducts;
