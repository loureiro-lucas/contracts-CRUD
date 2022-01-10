import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Contracts from '../pages/Contracts';

const Routes = () => (
  <>
    <Route exact path='/' render={ (props) => <Login { ...props } /> } />
    <Route path='/contracts' render={ (props) => <Contracts { ...props } /> } />
  </>
);

export default Routes;
