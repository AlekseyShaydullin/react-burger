import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredientsReducer';
import { currentBurgerReducer } from "./currentBurgerReducer";
import { showIngredientDetailsReducer } from "./showIngredientDetailsReducer";
import { usersReducer } from "./usersReducer";
import { wsReducer } from "./wsReducer";
import { setOrderReducer } from "./setOrderReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: currentBurgerReducer,
  ingredientDetail: showIngredientDetailsReducer,
  order: setOrderReducer,
  userInfo: usersReducer,
  wsOrders: wsReducer
})
