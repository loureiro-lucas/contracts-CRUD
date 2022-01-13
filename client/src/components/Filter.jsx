import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const { filterInput, setFilterInput } = useContext(AppContext);

  const handleFilterInputs = ({ target: { name, value } }) => {
    setFilterInput((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const submitFilter = (event) => {
    event.preventDefault();
    console.log(filterInput);
  };

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
          minWidth: "800px",
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
