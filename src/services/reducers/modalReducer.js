import { CLOSE_MODAL_INGREDIENT, CLOSE_MODAL_ORDER, OPEN_MODAL_INGREDIENT, OPEN_MODAL_ORDER } from "../actions/modal"

const initialState = {
  modalOrder: false,
  modalIngredient: false
}

export const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL_ORDER: {
      return {
        ...state,
        modalOrder: true
      }
    }
    case CLOSE_MODAL_ORDER: {
      return {
        ...state,
        modalOrder: false
      }
    }
    case OPEN_MODAL_INGREDIENT: {
      return {
        ...state,
        modalIngredient: true
      }
    }
    case CLOSE_MODAL_INGREDIENT: {
      return {
        ...state,
        modalIngredient: false
      }
    }
    default:
      return state
  }
}
