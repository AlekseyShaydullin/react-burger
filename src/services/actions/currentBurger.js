import { v4 as uuid4 } from 'uuid';

export const ADD_BURGER_INGREDIENTS = 'ADD_BURGER_INGREDIENTS';
export const SET_BURGER_BUN = 'SET_BURGER_BUN';
export const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
export const SORTED_BURGER_INGREDIENTS = 'SORTED_BURGER_INGREDIENTS';
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS';

export const setBurgerBun = item => ({
  type: SET_BURGER_BUN, 
  data: item
});

export const addBurgerIngredient = item => ({
  type: ADD_BURGER_INGREDIENTS, 
  data: item, 
  keyId: uuid4()
});

export const deleteBurgerIngredient = id => ({
  type: DELETE_BURGER_INGREDIENT, 
  index: id 
})

export const sortedIngredients = ingredients => ({
  type: SORTED_BURGER_INGREDIENTS, 
  sorted: ingredients
})

export const resetIngredients = () => ({
  type: RESET_INGREDIENTS,
});