import {SET_ORDER_NUMBER_REQUEST, SET_ORDER_NUMBER_ERROR, SET_ORDER_NUMBER_SUCCESS, CLEAR_NUMBER_CONSTRUCTOR} from '../actions/setOrderNumber';
import { RESET_STATE_ORDER } from '../actions/stateOrder';

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
}

interface IState {
  order: string | null;
  orderRequest: boolean;
  orderFailed: boolean;
}

export interface IRequestNumber {
  readonly type: typeof SET_ORDER_NUMBER_REQUEST;
}

export interface ISuccessNumber {
  readonly type: typeof SET_ORDER_NUMBER_SUCCESS;
  order: string | null;
}

export interface IErrorNumber {
  readonly type: typeof SET_ORDER_NUMBER_ERROR;
}

export interface IResetStateOrderNumber {
  readonly type: typeof RESET_STATE_ORDER;
}

export interface ISetOrderNumber {
  readonly type: typeof CLEAR_NUMBER_CONSTRUCTOR;
  data: null;
}

export type TActionOrderNumber = IRequestNumber | ISuccessNumber | IErrorNumber | ISetOrderNumber | IResetStateOrderNumber;

export const setOrderNumberReducer = (state: IState = initialState, action: TActionOrderNumber): IState => {
  switch (action.type) {
    case SET_ORDER_NUMBER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    case SET_ORDER_NUMBER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order
      }
    case SET_ORDER_NUMBER_ERROR: 
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
