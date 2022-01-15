export const GET_CONTRACTS = 'GET_CONTRACTS';
export const GET_COMPANIES = 'GET_COMPANIES';

export const getContracts = (payload) => ({
  type: GET_CONTRACTS,
  payload,
});
