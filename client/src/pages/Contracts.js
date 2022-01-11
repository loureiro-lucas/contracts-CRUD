import React, { useState } from 'react';
import AppContext from '../context/AppContext';
import ContractsTable from '../components/ContractsTable';
import Filter from '../components/Filter';
import Header from '../components/Header';

const Contracts = () => {
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
      <Header />
      <Filter />
      <ContractsTable />
    </AppContext.Provider>
  );
};

export default Contracts;