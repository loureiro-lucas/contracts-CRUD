import React, { useState } from 'react';
import AppContext from '../context/AppContext';
import ContractsTable from '../components/ContractsTable';
import Filter from '../components/Filter';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const Contracts = ({ location: { pathname } }) => {
  const [filterInput, setFilterInput] = useState({
    documentNumber: '',
    socialReason: '',
    company: '',
  });

  const context = {
    filterInput,
    setFilterInput,
  };

  return (
    <AppContext.Provider value={ context }>
      <Header pathname={ pathname } />
      <Filter />
      <ContractsTable />
    </AppContext.Provider>
  );
};

Contracts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Contracts;