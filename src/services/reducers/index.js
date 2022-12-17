import { combineReducers } from "redux";
import { ingredientsReducer } from './ingredientsReducer';
import { currentBurgerReducer } from "./currentBurgerReducer";
import { showIngredientDetailsReducer } from "./showIngredientDetailsReducer";
import { setOrderReducer } from "./setOrderReducer";
import { usersReducer } from "./usersReducer";
import { wsReducer, wsUserReducer } from "./wsReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: currentBurgerReducer,
  ingredientDetail: showIngredientDetailsReducer,
  order: setOrderReducer,
  userInfo: usersReducer,
  wsOrders: wsReducer,
  wsUserOrders: wsUserReducer
})