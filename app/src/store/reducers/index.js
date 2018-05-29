import user from './user';
import status from './status';
import { setAuthenticationHeader } from '../../services/base';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      if (action.payload &&
        action.payload.user &&
        action.payload.user.token) {
        setAuthenticationHeader(action.payload.user.token);
      }
      return true;
    default:
      return state;
  }
};

const appReducers = {
  user,
  status,
  rehydrated,
};

export default appReducers;
