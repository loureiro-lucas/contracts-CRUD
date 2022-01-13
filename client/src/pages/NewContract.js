import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import NewContractForm from '../components/NewContractForm';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ContractsProducts from '../components/ContractsProducts';

const NewContracts = ({ location: { pathname } }) => {
  return (
    <>
      <Header pathname={ pathname } />
      <NewContractForm />
      <ContractsProducts />
    </>
  )
};

NewContracts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NewContracts;
