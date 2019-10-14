import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

// import './config/ReactotronConfig';

import { Toastr } from '~/components';

import Routes from '~/routes';
import history from '~/services/history';

import { store, persistor } from '~/store';

import GlobalStyles from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <Toastr />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
