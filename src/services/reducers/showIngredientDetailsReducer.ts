import { TIngredient } from '../../utils/types/data';
import {ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS} from '../actions/showIngredientDetails';

const initialState = {
  ingredient: null,
  active: false
}

interface IState {
  ingredient: Array<TIngredient> | null;
  active: boolean;
}

export interface IAddIngredientDetails {
  readonly type: typeof ADD_INGREDIENT_DETAILS
  ingredient: Array<TIngredient> | null;
}

export interface IDeleteIngredientDetails {
  readonly type: typeof DELETE_INGREDIENT_DETAILS;
}

export type TActionIngredientDetails = IAddIngredientDetails | IDeleteIngredientDetails;

export const showIngredientDetailsReducer = (state: IState = initialState, action: TActionIngredientDetails) => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredient: action.ingredient,
        active: true
      }
    case DELETE_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredient: null
      }
    default:
      return state
  }
}