import {getData} from '../../utils/api';
import { AppDispatch } from '../../utils/types/main';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';

export function getIngredients() {
  return function(dispatch: AppDispatch) {
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