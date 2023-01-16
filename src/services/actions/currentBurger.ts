import { v4 as uuid4 } from 'uuid';
import { TIngredient } from '../../utils/types/data';

export const ADD_BURGER_INGREDIENTS: 'ADD_BURGER_INGREDIENTS' = 'ADD_BURGER_INGREDIENTS';
export const SET_BURGER_BUN: 'SET_BURGER_BUN' = 'SET_BURGER_BUN';
export const DELETE_BURGER_INGREDIENT: 'DELETE_BURGER_INGREDIENT' = 'DELETE_BURGER_INGREDIENT';
export const SORTED_BURGER_INGREDIENTS: 'SORTED_BURGER_INGREDIENTS' = 'SORTED_BURGER_INGREDIENTS';
export const RESET_INGREDIENTS: 'RESET_INGREDIENTS' = 'RESET_INGREDIENTS';

export interface ISetBurgerBun {
  readonly type: typeof SET_BURGER_BUN;
  data: Array<TIngredient>;
}

export interface IAddBurgerIngredient {
  readonly type: typeof ADD_BURGER_INGREDIENTS;
  data: Array<TIngredient>;
  keyId: number | string;
}

export interface IDeleteBurgerIngredient {
  readonly type: typeof DELETE_BURGER_INGREDIENT;
  index: number;
}

export interface ISortedBurgerIngredients {
  readonly type: typeof SORTED_BURGER_INGREDIENTS;
  sorted: Array<TIngredient>;
}

export interface IResetIngredients {
  readonly type: typeof RESET_INGREDIENTS;
}

export const setBurgerBun = (item: Array<TIngredient>): ISetBurgerBun => ({
  type: SET_BURGER_BUN, 
  data: item
});

export const addBurgerIngredient = (item: Array<TIngredient>): IAddBurgerIngredient => ({
  type: ADD_BURGER_INGREDIENTS, 
  data: item, 
  keyId: uuid4()
});

export const deleteBurgerIngredient = (id: number): IDeleteBurgerIngredient => ({
  type: DELETE_BURGER_INGREDIENT, 
  index: id 
})

export const sortedIngredients = (ingredients: Array<TIngredient>): ISortedBurgerIngredients => ({
  type: SORTED_BURGER_INGREDIENTS, 
  sorted: ingredients
})

export const resetIngredients = (): IResetIngredients => ({
  type: RESET_INGREDIENTS,
});