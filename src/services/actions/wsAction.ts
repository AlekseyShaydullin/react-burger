import { IOrder, TOrderData } from "../../utils/types/data";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_AUTHCONNECTION_START: 'WS_AUTHCONNECTION_START' = 'WS_AUTHCONNECTION_START';
export const WS_CONNECTION_STOP: 'WS_CONNECTION_STOP' = 'WS_CONNECTION_STOP';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_ORDERS: 'WS_SEND_ORDERS' = 'WS_SEND_ORDERS';

export type TWsSocketMiddlewareActions = {
  readonly wsInit: typeof WS_CONNECTION_START;
  readonly wsClosed: typeof WS_CONNECTION_STOP;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onMessage: typeof WS_GET_ORDERS;
  readonly wsSendMessage: typeof WS_SEND_ORDERS;
}

export interface IWSConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  payload?: Event;
}

export interface IWSConnectionOpen {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload?: Event;
}

export interface IWSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  payload?: Event;
}

export interface IWSConnectionStop {
  readonly type: typeof WS_CONNECTION_STOP;
  payload?: Event;
}

export interface IWSConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  payload: {
    url: string;
    isAuth: boolean;
  }
}

export interface IWSAuthConnectionStart {
  readonly type: typeof WS_AUTHCONNECTION_START;
  payload: {
    url: string;
    isAuth: boolean;
  }
}

export interface IWSSendOrders {
  readonly type: typeof WS_SEND_ORDERS;
  payload: IOrder;
}

export type TWSActions = IWSConnectionSuccess
  | IWSConnectionOpen
  | IWSConnectionError
  | IWSConnectionClosed
  | IWSConnectionStart
  | IWSAuthConnectionStart
  | IWSSendOrders;

export const wsAction: TWsSocketMiddlewareActions = {
  wsInit: WS_CONNECTION_START,
  wsClosed: WS_CONNECTION_STOP,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_ORDERS,
  wsSendMessage: WS_SEND_ORDERS
};

export const wsConnectionSuccess = (): IWSConnectionSuccess => ({
  type: WS_CONNECTION_SUCCESS
});

export const wsConnectionOpen = (): IWSConnectionOpen => ({
  type: WS_CONNECTION_START
})

export const wsConnectionError = (): IWSConnectionError => ({
  type: WS_CONNECTION_ERROR,
})

export const wsConnectionClosed = (): IWSConnectionClosed => ({
  type: WS_CONNECTION_CLOSED
})

export const wsGetOrders = (data: Array<TOrderData> | null) => {
  return {
    type: WS_GET_ORDERS,
    payload: data
  }
}

export const wsSendOrders = (data: IOrder): IWSSendOrders => {
  return {
    type: WS_SEND_ORDERS,
    payload: data
  }
}

export const wsConnectionStart = (URL: string): IWSConnectionStart => {
  return {
    type: WS_CONNECTION_START,
    payload: {
      url: URL,
      isAuth: false
    }
  }
}

export const wsAuthConnectionStart = (URL: string): IWSAuthConnectionStart => {
  return {
    type: WS_AUTHCONNECTION_START,
    payload: {
      url: URL,
      isAuth: true
    }
  }
}

export const wsConnectionStop = (): IWSConnectionStop => {
  return {
    type: WS_CONNECTION_STOP
  }
}

