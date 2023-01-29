import { TOrder } from "../../utils/types/data";
import { 
  IWSAuthConnectionStart,
  IWSConnectionClosed,
  IWSConnectionError,
  IWSConnectionStart,
  IWSConnectionStop,
  IWSConnectionSuccess,
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
  url: string;
  isAuth: boolean;
}

export interface IWSGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: {
    orders: Array<TOrder>;
    total: number;
    totalToday: number;
    length: number;
  };
  
}

export type TWSActionData = 
  IWSConnectionStart
  | IWSAuthConnectionStart
  | IWSConnectionSuccess
  | IWSConnectionClosed
  | IWSConnectionError
  | IWSConnectionStop
  | IWSGetOrders
  | IWSSendOrders;

export const wsReducer = (state: IState = initialState, action: TWSActionData): IState => {
  switch(action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      }
    case WS_GET_ORDERS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
