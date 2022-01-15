import React, { useState } from 'react';
import ContractsContext from '../context/ContractsContext';
import ContractsTable from '../components/ContractsTable';
import Filter from '../components/Filter';
import { getContractsFromStorage, saveContractsToStorage } from '../services';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const Contracts = ({ location: { pathname } }) => {
  const [filterInput, setFilterInput] = useState({
    documentNumber: '',
    socialReason: '',
    company: '',
  });

  const contractsList = getContractsFromStorage();
  
  const [contractsListFiltered, setContractsListFiltered] = useState(contractsList);

  const contractsFilter = () => {
    setContractsListFiltered(contractsList.filter((contract) => (
      (filterInput.documentNumber === contract.documentNumber
        || filterInput.documentNumber === '')
      && (filterInput.socialReason === contract.socialReason
        || filterInput.socialReason === '')
      && (filterInput.company === contract.company.name
        || filterInput.company === '')
    )));
  };

  const handleFilterInputs = ({ target: { name, value } }) => {
    setFilterInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const deleteContract = (index) => {
    const currentContracts = getContractsFromStorage();
    const newContractsList = [];
    currentContracts.forEach((contract, contractIndex) => {
      if (contractIndex !== index) {
        newContractsList.push(contract);
      };
    });
    saveContractsToStorage(newContractsList);
    setContractsListFiltered(newContractsList);
  };

  const context = {
    filterInput,
    handleFilterInputs,
    contractsListFiltered,
    contractsFilter,
    deleteContract,
  };

  return (
    <ContractsContext.Provider value={ context }>
      <Header pathname={ pathname } />
      <Filter />
      <ContractsTable />
    </ContractsContext.Provider>
  );
};

Contracts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Contracts;