import React from 'react';
import NewContractContext from '../context/NewContractContext';
import ContractsProducts from '../components/ContractsProducts';
import Header from '../components/Header';
import NewContractForm from '../components/NewContractForm';
import PropTypes from 'prop-types';

const NewContracts = ({ location: { pathname } }) => {
  const context = {};

  return (
    <NewContractContext.Provider value={ context }>
      <Header pathname={ pathname } />
      <NewContractForm />
      <ContractsProducts />
    </NewContractContext.Provider>
  )
};

NewContracts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NewContracts;
