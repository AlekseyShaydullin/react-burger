import { TOrder } from "../../utils/types/data";
import { 
  IWSAuthConnectionStart,
  IWSConnectionStart,
  IWSSendOrders,
  WS_CONNECTION_CLOSED, 
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS, 
  WS_GET_ORDERS
} from "../actions/wsAction";

const initialState = {
  wsConnected: false,
  data: {
    orders: null,
    total: 0,
    totalToday: 0,
    length: 0
  },
  error: undefined,
  url: '',
  isAuth: false
}

interface IState {
  wsConnected: boolean;
  data: {
    orders: Array<TOrder> | null;
    total: number;
    totalToday: number;
    length: number;
  };
  error?: Event;
  url: string;
  isAuth: boolean;
}

export interface IWSConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  payload: Event;
}

export interface IWSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  payload: Event;
}

export interface IWSConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: Event;
}

export interface IWSGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: {
    orders: Array<TOrder>;
    total: number;
    totalToday: number;
  };
}

export type TWSActionData = 
  IWSConnectionStart
  | IWSAuthConnectionStart
  | IWSConnectionSuccess
  | IWSConnectionClosed
  | IWSConnectionError
  | IWSGetOrders
  | IWSSendOrders;

export const wsReducer = (state: IState = initialState, action: TWSActionData) => {
  switch(action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      }
    case WS_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        data: state.data.length
        ? [{...state.data}, action.payload]
        : action.payload
      }
    default:
      return state;
  }
}
