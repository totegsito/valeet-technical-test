const initialState = () => ({
  username: null,
  isLoggedIn: false,
});

export default function userReducer(state = initialState(), action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        token: action.token,
        username: action.username,
      };
    case 'USER_ERROR': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data,
        };
      }
      return initialState;
    }
    case 'USER_RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
