import { applyMiddleware, compose, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from './reducers';


const config = {
  key: 'root',
  storage,
  blacklist: ['status'],
};

const reducer = persistCombineReducers(config, reducers);

const middleware = [thunk, logger];

const configureStore = () => {
  const store = createStore(
    reducer,
    // eslint-disable-next-line no-underscore-dangle,no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middleware)),
  );

  const persistor = persistStore(
    store,
    null,
    () => {
      store.getState();
    },
  );

  return { persistor, store };
};

export default configureStore;
