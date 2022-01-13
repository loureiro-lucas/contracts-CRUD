import React, { useState } from 'react';
import ContractsContext from '../context/ContractsContext';
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
  
  const contractsList = [{
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
  }];

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

  const context = {
    filterInput,
    setFilterInput,
    companiesList,
    contractsListFiltered,
    contractsFilter,
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