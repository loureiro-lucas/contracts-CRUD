import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';

const NewContracts = ({ location: { pathname } }) => {
  return (
    <>
      <Header pathname={ pathname } />
      <p>Novo Contrato</p>
    </>
  )
};

NewContracts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NewContracts;
