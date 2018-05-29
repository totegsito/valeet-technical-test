import superHeroStore from '../superhero';

export const initialState = superHeroStore;

export default function superheroReducer(state = initialState, action) {
  switch (action.type) {
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
