// import { createDispatchHook } from "react-redux";
// import { TIngredient } from "./data";
// import { store } from "../../services/store";
// import { TActionCurrentBurger } from "../../services/reducers/currentBurgerReducer";
// import { TActionIngredients } from "../../services/reducers/ingredientsReducer";
// import { TActionOrder } from "../../services/reducers/setOrderReducer";
// import { TActionIngredientDetails } from "../../services/reducers/showIngredientDetailsReducer";
// import { TActionUsers } from "../../services/reducers/usersReducer";
// import { TWSAction } from "../../services/reducers/wsReducer";

// // export type TDispatchGetIngredients = {
// //   type: typeof ;
// //   data: TIngredient;
// // }

// // Необходимо создать свои хуки useDispatch, useSelector, useSelector и сделать типизицию


// export type AppDispatch = typeof store.dispatch;

// export type TApplicationActions = 
//   TActionCurrentBurger
//   | TActionIngredients
//   | TActionOrder
//   | TActionIngredientDetails
//   | TActionUsers
//   | TWSAction;


// export const useDispatch = () =>
//   createDispatchHook<AppDispatch | TApplicationActions | any>();