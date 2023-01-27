import { setOrderNumberApi } from "../../utils/api";
import { AppDispatch } from "../../utils/types/main";

export const SET_ORDER_NUMBER_REQUEST: 'SET_ORDER_NUMBER_REQUEST' = 'SET_ORDER_NUMBER_REQUEST';
export const SET_ORDER_NUMBER_ERROR: 'SET_ORDER_NUMBER_ERROR' = 'SET_ORDER_NUMBER_ERROR';
export const SET_ORDER_NUMBER_SUCCESS: 'SET_ORDER_NUMBER_SUCCESS' = 'SET_ORDER_NUMBER_SUCCESS';
export const CLEAR_NUMBER_CONSTRUCTOR: 'CLEAR_NUMBER_CONSTRUCTOR' = 'CLEAR_NUMBER_CONSTRUCTOR';

export function setOrderNumber(order: string | null) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: SET_ORDER_NUMBER_REQUEST
    })
    setOrderNumberApi(order)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: SET_ORDER_NUMBER_SUCCESS,
            order: res.order.number
          })
        } else {
          dispatch({
            type: SET_ORDER_NUMBER_ERROR
          })
        }})
        .then(() => {
          dispatch({
              type: CLEAR_NUMBER_CONSTRUCTOR,
              data: null,
          });
      })
      .catch((err) => {
        dispatch({
          type: SET_ORDER_NUMBER_ERROR,
          error: err.message
        })
      })
    }
  }
