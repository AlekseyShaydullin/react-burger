import {GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_SUCCESS} from '../actions/getIngredients';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: null
}


export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: 
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        dataFailed: false
      }
    case GET_INGREDIENTS_ERROR: 
      return {
        ...state,
        dataRequest: false,
        dataFailed: true
      }
    default:
      return state
  }
}