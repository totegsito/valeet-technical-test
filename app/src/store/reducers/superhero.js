import superHeroStore from '../superhero';

export const initialState = superHeroStore;

export default function superheroReducer(state = initialState, action) {
  switch (action.type) {
    case 'CURRENT_COMIC_REPLACE': {
      return {
        ...state,
        currentComic: action.data || {},
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
        ...initialState,
      };
    }
    case 'CURRENT_SUPERHERO_REPLACE': {
      return {
        ...state,
        superhero: action.data || {},
      };
    }
    default:
      return state;
  }
}
