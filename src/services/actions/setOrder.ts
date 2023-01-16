import { setOrderApi } from "../../utils/api";
import { TOrder } from "../../utils/types/data";

export const SET_ORDER_REQUEST: 'SET_ORDER_REQUEST' = 'SET_ORDER_REQUEST';
export const SET_ORDER_ERROR: 'SET_ORDER_ERROR' = 'SET_ORDER_ERROR';
export const SET_ORDER_SUCCESS: 'SET_ORDER_SUCCESS' = 'SET_ORDER_SUCCESS';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

export function setOrder(ingredients: TOrder) {
  return function(dispatch) {
    dispatch({
      type: SET_ORDER_REQUEST
    })
    ingredients !== false && setOrderApi(ingredients)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SET_ORDER_SUCCESS,
            order: res.order.number
          })
        } else {
          dispatch({
            type: SET_ORDER_ERROR
          })
        }})
        .then(() => {
          dispatch({
              type: CLEAR_CONSTRUCTOR,
              data: [],
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
