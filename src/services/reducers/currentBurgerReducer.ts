import { TIngredientKey } from '../../utils/types/data';
import {
  ADD_BURGER_INGREDIENTS, 
  SET_BURGER_BUN, 
  DELETE_BURGER_INGREDIENT, 
  SORTED_BURGER_INGREDIENTS, 
  RESET_INGREDIENTS, 
  IAddBurgerIngredient, 
  ISetBurgerBun, 
  IDeleteBurgerIngredient, 
  IResetIngredients, 
  ISortedBurgerIngredients
} from '../actions/currentBurger';

const initialState = {
  ingredients: [],
  bun: null,
}

interface IState {
  ingredients: TIngredientKey[];
  bun: TIngredientKey | null;
}

export type TActionCurrentBurger = 
  IAddBurgerIngredient 
  | ISetBurgerBun 
  | IDeleteBurgerIngredient 
  | ISortedBurgerIngredients 
  | IResetIngredients;

export const currentBurgerReducer = (state: IState = initialState, action: TActionCurrentBurger): IState => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, {...action.data, keyId: action.keyId}]
      }
    case SET_BURGER_BUN:
      return {
        ...state,
        bun: action.data
      }
    case DELETE_BURGER_INGREDIENT: 
      return {
        ...state,
        ingredients: state.ingredients.filter((ing, index) => index !== action.index)
      }
    case SORTED_BURGER_INGREDIENTS: 
      return {
        ...state,
        ingredients: action.sorted
      }
    case RESET_INGREDIENTS:
      return {
        ingredients: [],
        bun: null,
      };
    default: 
      return state
  }
}