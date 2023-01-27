import { TIngredient } from '../../utils/types/data';
import {GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_SUCCESS} from '../actions/getIngredients';

const initialState = {
  isLoading: false,
  dataRequest: false,
  dataFailed: false,
  data: null
}

interface IState {
  isLoading: boolean;
  dataRequest: boolean;
  dataFailed: boolean;
  data: Array<TIngredient> | null;
}

export interface IGetIngredientRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
  dataRequest?: boolean;
  dataFailed?: boolean;
}

export interface IGetIngredientSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  data: Array<TIngredient> | null;
  isLoading?: boolean;
  dataRequest?: boolean;
  dataFailed?: boolean;
}

export interface IGetIngredientError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
  dataRequest?: boolean;
  dataFailed?: boolean;
}

export type TActionIngredients = IGetIngredientRequest | IGetIngredientSuccess | IGetIngredientError;

export const ingredientsReducer = (state: IState = initialState, action: TActionIngredients): IState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: 
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        dataFailed: false,
        isLoading: true
      }
    case GET_INGREDIENTS_ERROR: 
      return {
        ...state,
        dataRequest: false,
        dataFailed: true
      }
    default:
      return state
  }
}
