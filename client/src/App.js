import React from 'react';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Routes />
      </Switch>
    </Provider>
  );
};

export default App;
