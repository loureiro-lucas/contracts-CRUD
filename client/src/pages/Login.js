import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getContracts } from '../redux/actions';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Login = ({ history }) => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleInputChanges = ({ target: { name, value } }) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };
  
  const contracts = useSelector((state) => state.contracts.contracts);
  const companies = useSelector((state) => state.companies.companies);

  const saveContractsToLocalStore = () => {
    localStorage.setItem('contracts', JSON.stringify(contracts));
  };
  
  const saveCompaniesToLocalStore = () => {
    localStorage.setItem('companies', JSON.stringify(companies));
  };
  
    const submitLogin = async (event) => {
      event.preventDefault();
      await dispatch(getContracts());
      await saveContractsToLocalStore();
      await saveCompaniesToLocalStore();
      history.push('/contracts');
    };

  return (
    <Container sx={{
      mx: "auto",
      my: "30vh",
      textAlign: "center",
      width: "300px",
    }}>
      <form onSubmit={ submitLogin } autoComplete='off'>
        <Typography
          color="primary"
          variant="h4"
          component="h1"
        >
          Login
        </Typography>
        <TextField
          type="text"
          name="username"
          label="Username"
          variant="standard"
          size="small"
          value={ userInput.username }
          onChange={ handleInputChanges }
          fullWidth
          required
          sx={{ my: 1}}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="standard"
          size="small"
          value={ userInput.password }
          onChange={ handleInputChanges }
          fullWidth
          required
          sx={{ my: 1}}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ my: 2 }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
