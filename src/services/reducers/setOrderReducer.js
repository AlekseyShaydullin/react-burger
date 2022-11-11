import {SET_ORDER_REQUEST, SET_ORDER_ERROR, SET_ORDER_SUCCESS} from '../actions/setOrder';

const initialState = {
  order: 0,
  orderRequest: false,
  orderFailed: false,
}

export const setOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    case SET_ORDER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order
      }
    case SET_ORDER_ERROR: 
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    default:
      return state
  }
}