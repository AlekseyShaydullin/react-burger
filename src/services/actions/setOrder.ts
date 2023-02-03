import { setOrderApi } from "../../utils/api";
import { AppDispatch } from "../../utils/types/main";

export const SET_ORDER_REQUEST: 'SET_ORDER_REQUEST' = 'SET_ORDER_REQUEST';
export const SET_ORDER_ERROR: 'SET_ORDER_ERROR' = 'SET_ORDER_ERROR';
export const SET_ORDER_SUCCESS: 'SET_ORDER_SUCCESS' = 'SET_ORDER_SUCCESS';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

export function setOrder(order: Array<string> | null) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: SET_ORDER_REQUEST
    })
    setOrderApi(order)
      .then(res => {
        if (res) {
          dispatch({
            type: SET_ORDER_SUCCESS,
            order: res.order
          })
        } else {
          dispatch({
            type: SET_ORDER_ERROR
          })
        }})
        .then(() => {
          dispatch({
              type: CLEAR_CONSTRUCTOR,
              data: null,
          });
      })
      .catch((err) => {
        dispatch({
          type: SET_ORDER_ERROR,
          error: err.message
        })
      })
    }
  }
