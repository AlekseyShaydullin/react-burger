export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';
export const WS_SEND_ORDERS = 'WS_SEND_ORDERS';

export const wsAction = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_ORDERS,
  wsSendMessage: WS_SEND_ORDERS
};

export const WS_USER_CONNECTION_START = 'WS_USER_CONNECTION_START';
export const WS_USER_CONNECTION_SUCCESS = 'WS_USER_CONNECTION_SUCCESS';
export const WS_USER_CONNECTION_ERROR = 'WS_USER_CONNECTION_ERROR';
export const WS_USER_CONNECTION_CLOSED = 'WS_USER_CONNECTION_CLOSED';
export const WS_USER_GET_ORDERS = 'WS_USER_GET_ORDERS';
export const WS_USER_SEND_ORDERS = 'WS_USER_SEND_ORDERS';

export const wsUserAction = {
  wsInit: WS_USER_CONNECTION_START,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onError: WS_USER_CONNECTION_ERROR,
  onClose: WS_USER_CONNECTION_CLOSED,
  onMessage: WS_USER_GET_ORDERS,
  wsSendMessage: WS_USER_SEND_ORDERS
};

export const wsConnectionSuccess = () => ({
  type: WS_CONNECTION_SUCCESS
});

export const wsConnectionOpen = () => ({
  type: WS_CONNECTION_START
})

export const wsConnectionError = () => ({
  type: WS_CONNECTION_ERROR
})

export const wsConnectionClosed = () => ({
  type: WS_CONNECTION_CLOSED
})

export const wsGetOrders = (data) => {
  return {
    type: WS_GET_ORDERS,
    payload: data
  }
}

export const wsSendOrders = (data) => {
  return {
    type: WS_SEND_ORDERS,
    payload: data
  }
}

export const wsUserConnectionSuccess = () => ({
  type: WS_USER_CONNECTION_SUCCESS
});

export const wsUserConnectionOpen = () => ({
  type: WS_USER_CONNECTION_START
})

export const wsUserConnectionError = () => ({
  type: WS_USER_CONNECTION_ERROR
})

export const wsUserConnectionClosed = () => ({
  type: WS_USER_CONNECTION_CLOSED
})

export const wsUserGetOrders = (data) => {
  return {
    type: WS_USER_GET_ORDERS,
    payload: data
  }
}

export const wsUserSendOrders = (data) => {
  return {
    type: WS_USER_SEND_ORDERS,
    payload: data
  }
}