import { GET_COMPANIES } from '../actions';

const INITIAL_STATE = {
  companies: [],
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

const companies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPANIES:
    return ({
      ...state,
      companies: [...state.companies, companiesList]
    });
  default:
    return state;
  }
};

export default companies;
