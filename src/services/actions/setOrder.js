import { setOrderApi } from "../../utils/api";

export const SET_ORDER_REQUEST = 'SET_ORDER_REQUEST';
export const SET_ORDER_ERROR = 'SET_ORDER_ERROR';
export const SET_ORDER_SUCCESS = 'SET_ORDER_SUCCESS';

export function setOrder(arr) {
  return function(dispatch) {
    dispatch({
      type: SET_ORDER_REQUEST
    })
    setOrderApi(arr)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SET_ORDER_SUCCESS,
            order: res.order.number
          })
        }})
      .catch(() => {
        dispatch({
          type: SET_ORDER_ERROR
        })
      })
    }
  }
