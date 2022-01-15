import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { getContracts } from '../redux/actions';
import { getContractsFromStorage, saveContractsToStorage } from '../services';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const userData = {
    username: 'admin',
    password: 'securepassword'
  };

  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  });

  const handleInputChanges = ({ target: { name, value } }) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  const [inputError, setInputError] = useState(false);

  const validateUserInput = () => {
    if (userInput.username !== userData.username
      || userInput.password !== userData.password) {
        setInputError(true);
        return false;
    } else {
      setInputError(false);
      return true;
    };
  };
  
  const firstContractAsExample = {
  documentNumber: '1234567890',
  socialReason: 'Social Reason 1',
  company: {
    id: '12345',
    name: 'Company 1'
  },
  adress: {
    country: 'Brasil',
    state: 'Minas Gerais',
    city: 'Belo Horizonte',
    street: 'Rua A',
    district: 'Distrito B',
    number: '123',
    zipcode: '30600300',
  },
  contact: {
    email: 'email@email.com',
    phone: '31999998888',
  },
  date: {
    startsIn: '01/01/2022',
    endsIn: '31/12/2022',
    dueDay: '10/01/2022',
  },
  products: {
    product: 'Produto 1',
    amount: '100',
    finalUnitPrice: '10',
    installments: '3',
    paidInstallments: '1',
    begginningOfTerm: '01/01/2022',
  },
};

  useEffect(() => {
    const contracts = getContractsFromStorage();
    if (contracts.length === 0) {
      console.log('aqui');
      saveContractsToStorage([firstContractAsExample]);
      dispatch(getContracts(firstContractAsExample));
  }}, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    if(validateUserInput()) {
      const contractsList = getContractsFromStorage();
      await dispatch(getContracts(contractsList));
      localStorage.setItem("username", userInput.username);
      history.push('/contracts');
    };
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
          error={ inputError }
          helperText={ inputError && 'Usuário ou senha inválido(s)' }
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
          error={ inputError }
          helperText={ inputError && 'Usuário ou senha inválido(s)' }
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
