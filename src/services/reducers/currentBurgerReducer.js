import {ADD_BURGER_INGREDIENTS, SET_BURGER_BUN, DELETE_BURGER_INGREDIENT, SORTED_BURGER_INGREDIENTS} from '../actions/currentBurger';

const initialState = {
  ingredients: [],
  bun: null
}

export const currentBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, {...action.data, keyId: action.keyId}]
      }
    case SET_BURGER_BUN:
      return {
        ...state,
        bun: action.data
      }
    case DELETE_BURGER_INGREDIENT: 
      return {
        ...state,
        ingredients: state.ingredients.filter((ing, index) => index !== action.index)
      }
    case SORTED_BURGER_INGREDIENTS: 
      return {
        ...state,
        ingredients: action.sorted
      }
    default: 
      return state
  }
}