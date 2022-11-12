import {ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS} from '../actions/showIngredientDetails';

const initialState = {
  ingredient: null,
  active: false
}

export const showIngredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredient: action.ingredient,
        active: true
      }
    case DELETE_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredient: null
      }
    default:
      return state
  }
}