import { GET_CONTRACTS } from '../actions';

const INITIAL_STATE = {
  contracts: [],
  contractToEdit: {},
};

const contracts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CONTRACTS:
    return ({
      ...state,
      contracts: [...state.contracts, action.payload]
    });
  default:
    return state;
  };
};

export default contracts;
