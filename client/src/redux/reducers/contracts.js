import { GET_CONTRACTS } from '../actions';

const INITIAL_STATE = {
  contracts: [],
};

const firstContract = {
  documentNumber: '1234567890',
  socialRason: 'Social Rason 1',
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

const contracts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CONTRACTS:
    return ({
      ...state,
      contracts: [...state.contracts, firstContract]
    });
  default:
    return state;
  }
};

export default contracts;
