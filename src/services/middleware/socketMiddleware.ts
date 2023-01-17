import { Middleware, MiddlewareAPI  } from "redux";
import { RootState } from "../../services/store";
import { getCookie } from "../../utils/cookie";
import { AppDispatch, AppThunk } from "../../utils/types/main";
import { TWSActions } from "../actions/wsAction";
import { TWSActionData } from "../reducers/wsReducer";

export const socketMiddleware = (wsActions: TWSActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>
  ): AppThunk<void, RootState, unknown, TWSActionData> => {
    let socket: WebSocket | null = null;

    return next => (action: TWSActionData) => {
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
        socket.onopen = (event) => {
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

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event })
        };

        if(type === wsSendMessage) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders))
        }
      }
      next(action);
    }
  }) as Middleware;
}