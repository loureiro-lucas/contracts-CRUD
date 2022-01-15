import React, { useContext } from 'react';
import ContractContext from '../context/ContractsContext';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const {
    filterInput,
    handleFilterInputs,
    contractsFilter,
  } = useContext(ContractContext);

  const submitFilter = (event) => {
    event.preventDefault();
    contractsFilter();
  };

  const companiesList = [
    {
      name: 'Company 1',
      id: 1213
    },
    {
      name: 'Company 2',
      id: 3513
    },
    {
      name: 'Company 3',
      id: 14123
    },
    {
      name: 'Company 4',
      id: 573
    },
    {
      name: 'Company 5',
      id: 2352352
    },
    {
      name: 'Company 6',
      id: 23423123
    },
    {
      name: 'Company 7',
      id: 12323523
    },
    {
      name: 'Company 8',
      id: 7894545
    },
    {
      name: 'Company 9',
      id: 34363473
    },
    {
      name: 'Company 10',
      id: 34621423
    },
    {
      name: 'Company 11',
      id: 78534563
    },
    {
      name: 'Company 12',
      id: 3453
    },
    {
      name: 'Company 13',
      id: 423425
    },
    {
      name: 'Company 14',
      id: 867678
    },
    {
      name: 'Company 15',
      id: 2342125433
    },
  ];

  return (
    <Container>
      <Typography variant="h5" component="h1" my={ 2 }>
        Contracts
      </Typography>
      <form
        onSubmit={ submitFilter }
      >
        <Container sx={{
          display: "flex",
          justifyContent: "flex-start",
          minWidth: "1000px",
        }}>
          <TextField
            type="text"
            name="documentNumber"
            label="Document Number"
            variant="outlined"
            size="small"
            sx={{ width: "200px", m: 1 }}
            value={ filterInput.documentNumber }
            onChange={ handleFilterInputs }
          />
          <TextField
            type="text"
            name="socialReason"
            label="Social Reason"
            variant="outlined"
            size="small"
            sx={{ width: "200px", m: 1 }}
            value={ filterInput.socialReason }
            onChange={ handleFilterInputs }
          />
          <FormControl>
            <InputLabel id="company-label">Company</InputLabel>
            <Select
              labelId="company-label"
              name="company"
              label="Company"
              value={ filterInput.company }
              size="small"
              sx={{ width: "200px", m: 1 }}
              onChange={ handleFilterInputs }
              >
              <MenuItem disabled value={''}></MenuItem>
              { companiesList.map(({ name }) => (
                <MenuItem key={ name } value={ name }>{ name }</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            sx={{ m: 1 }}
          >
            Filter
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default Filter;
