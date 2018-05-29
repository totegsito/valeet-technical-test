const getInitialState = () => ({});

export default function superheroReducer(state = getInitialState(), action) {
  switch (action.type) {
    case 'CURRENT_COMIC_REPLACE': {
      return {
        ...state,
        ...action.data,
      };
    }
    case 'COMIC_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'COMIC_RESET': {
      return {
        ...getInitialState(),
      };
    }
    default:
      return state;
  }
}
