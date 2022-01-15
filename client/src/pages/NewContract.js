import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ContractsProducts from '../components/ContractsProducts';
import { getContractsFromStorage, saveContractsToStorage } from '../services';
import Header from '../components/Header';
import NewContractContext from '../context/NewContractContext';
import NewContractForm from '../components/NewContractForm';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const NewContracts = ({ location: { pathname } }) => {
  const contractToEdit = useSelector((state) => state.contractToEdit);

  const INITIAL_CONTRACT_STATE = contractToEdit || {
    country: '',
    state: '',
    city: '',
    documentNumber: '',
    socialReason: '',
    adress: '',
    district: '',
    zipCode: '',
    email: '',
    phone: '',
    startsIn: '',
    endsIn: '',
    dueDay: '',
    company: '',
    contractFile: '',
  };

  useEffect(() => {
    console.log(contractToEdit)
  }, [contractToEdit])

  const [newContractInput, setNewContractInput] = useState(INITIAL_CONTRACT_STATE);
  
  const handleNewContractInputs = ({ target: { name, value } }) => {
    setNewContractInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const INITIAL_NEW_PRODUCT_STATE = {
    product: '',
    amount: '',
    finalUnitPrice: '',
    installments: '',
    paidInstallments: '',
    beginningOfTerm: '',
  };

  const [newProductInput, setNewProductInput] = useState(INITIAL_NEW_PRODUCT_STATE);

  const handleNewProductInputs = ({ target: { name, value } }) => {
    setNewProductInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const INITIAL_PRODUCTS_LIST_STATE = [];
  
  const [contractProducts, setContractProducts] = useState(INITIAL_PRODUCTS_LIST_STATE);

  const handleAddProductButton = (event) => {
    event.preventDefault();
    setContractProducts((prevProducts) => ([
      ...prevProducts,
      newProductInput,
    ]));
    setNewProductInput(INITIAL_NEW_PRODUCT_STATE);
  };

  const discardChanges = () => {
    setNewContractInput(INITIAL_CONTRACT_STATE);
    setNewProductInput(INITIAL_NEW_PRODUCT_STATE);
    setContractProducts(INITIAL_PRODUCTS_LIST_STATE);
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

  const createContract = () => {
    const newContract = {
      documentNumber: newContractInput.documentNumber,
      socialReason: newContractInput.socialReason,
      company: {
        id: (
          companiesList.filter((company) => (
          company.name === newContractInput.company
          )).id),
        name: newContractInput.company,
      },
      adress: {
        country: newContractInput.country,
        state: newContractInput.state,
        city: newContractInput.city,
        street: newContractInput.street,
        district: newContractInput.district,
        number: newContractInput.number,
        zipcode: newContractInput.zipCode,
      },
      contact: {
        email: newContractInput.email,
        phone: newContractInput.phone,
      },
      date: {
        startsIn: newContractInput.startsIn,
        endsIn: newContractInput.endsIn,
        dueDay: newContractInput.dueDay,
      },
      products: {
        product: newProductInput.product,
        amount: newProductInput.amount,
        finalUnitPrice: newProductInput.finalUnitPrice,
        installments: newProductInput.installments,
        paidInstallments: newProductInput.paidInstallments,
        begginningOfTerm: newProductInput.begginningOfTerm,
      },
    };
    const currentContracts = getContractsFromStorage();
    if (newContract.documentNumber !== '') {
      saveContractsToStorage([...currentContracts, newContract]);
      discardChanges();
    } else window.alert('Document Number é obrigatório!')
  };

  const removeProducts = (index) => {
    let newProductsList = [];
    contractProducts.forEach((product, productIndex) => {
      if (productIndex !== index) {
        newProductsList.push(product);
      };
    });
    setContractProducts(newProductsList);
  };

  const context = {
    newContractInput,
    handleNewContractInputs,
    newProductInput,
    contractProducts,
    handleNewProductInputs,
    handleAddProductButton,
    companiesList,
    removeProducts,
  };

  return (
    <NewContractContext.Provider value={ context }>
      <Header pathname={ pathname } />
      <NewContractForm />
      <ContractsProducts />
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        minWidth: "1048px",
        maxWidth: "1200px",
        mx: "auto",
        my: 2,
        px: "48px"
      }}>
        <Button
          type="submit"
          variant="contained"
          color="error"
          sx={{ m: 1, height: "40px" }}
          onClick={ discardChanges }
        >
          Discard changes
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ m: 1, height: "40px" }}
          onClick={ createContract }
        >
          Create Contract
        </Button>
      </Box>
    </NewContractContext.Provider>
  )
};

NewContracts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NewContracts;
