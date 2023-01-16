import { 
  WS_CONNECTION_CLOSED, 
  WS_CONNECTION_ERROR, 
  WS_CONNECTION_SUCCESS, 
  WS_GET_ORDERS
} from "../actions/wsAction";

const initialState = {
  wsConnected: false,
  data: {
    orders: [],
    total: 0,
    totalToday: 0,
    length: 0
  },
  error: undefined
}

interface IState {
  wsConnected: boolean;
  data: {
    orders: Array<Object>;
    total: number;
    totalToday: number;
    length: number;
  };
  error?: Event;
}

export interface IWSConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: Event;
}

export interface IWSGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: Event;
  data: {
    orders: Array<Object>;
    total: number;
    totalToday: number;
  };
}

export type TWSAction = 
  IWSConnectionSuccess
  | IWSConnectionClosed
  | IWSConnectionError
  | IWSGetOrders;

export const wsReducer = (state: IState = initialState, action: TWSAction) => {
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
