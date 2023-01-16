import {getData} from '../../utils/api';
import { TIngredient } from '../../utils/types/data';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';

export type TResponse = {
  success: boolean;
  data?: TIngredient;
}

export function getIngredients() {
  return function(dispatch: any) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })

    getData()
    .then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data: res.data
        })
      } else {
        dispatch({
          type: GET_INGREDIENTS_ERROR
        })
      }})
    .catch(() => {
      dispatch({
        type: GET_INGREDIENTS_ERROR
      })
    })
  }
}