import {SET_ORDER_REQUEST, SET_ORDER_ERROR, SET_ORDER_SUCCESS} from '../actions/setOrder';
import { RESET_STATE_ORDER } from '../actions/stateOrder';

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
}

interface IState {
  order: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
}

export interface IRequest {
  readonly type: typeof SET_ORDER_REQUEST;
}

export interface ISuccess {
  readonly type: typeof SET_ORDER_SUCCESS;
  order: number | null;
}

export interface IError {
  readonly type: typeof SET_ORDER_ERROR;
}

export interface IResetStateOrder {
  readonly type: typeof RESET_STATE_ORDER;
}

export type TActionOrder = IRequest | ISuccess | IError | IResetStateOrder;

export const setOrderReducer = (state: IState = initialState, action: TActionOrder) => {
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
    case RESET_STATE_ORDER:
      return {
        ...state,
        order: null
      }
    default:
      return state
  }
}