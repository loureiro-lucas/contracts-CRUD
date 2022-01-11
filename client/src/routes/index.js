import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Contracts from '../pages/Contracts';
import NewContract from '../pages/NewContract';

const Routes = () => (
  <>
    <Route exact path='/' render={ (props) => <Login { ...props } /> } />
    <Route path='/contracts' render={ (props) => <Contracts { ...props } /> } />
    <Route path='/new-contract' render={ (props) => <NewContract { ...props } /> } />
  </>
);

export default Routes;
