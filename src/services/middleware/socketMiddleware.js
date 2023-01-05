import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        const isAuth = payload.isAuth
        const accessToken = getCookie('accessToken');

        const wsUrl = isAuth ? payload.url + `?token=${accessToken}` : payload.url
        socket = new WebSocket(wsUrl);
    }

      if(socket) {
        socket.onOpen = event => {
          dispatch({ type: onOpen, payload: event })
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event })
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, payload: parsedData })
        };

        socket.onClose = event => {
          dispatch({ type: onClose, payload: event })
        };

        if(type === wsSendMessage) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders))
        }
      }
      next(action);
    }
  }
}