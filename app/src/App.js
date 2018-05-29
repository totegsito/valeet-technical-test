import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './store';
import Router from './containers/RoutesContainer';
import Loading from './components/Loader';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={Loading}>
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
