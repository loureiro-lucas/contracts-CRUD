export const getContractsFromStorage = () => JSON.parse(localStorage.getItem('contracts')) || [];

export const saveContractsToStorage = (contracts) => {
  localStorage.setItem('contracts', JSON.stringify(contracts));
};
