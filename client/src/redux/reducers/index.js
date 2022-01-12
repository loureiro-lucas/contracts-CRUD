import { combineReducers } from 'redux';
import contracts from './contracts';
import companies from './companies';

const rootReducer = combineReducers({ contracts, companies });

export default rootReducer;