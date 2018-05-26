const initialState = () => ({
  name: null,
  surname: null,
});

export default function userReducer(state = initialState(), action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        loading: false,
      };
    default:
      return state;
  }
}
