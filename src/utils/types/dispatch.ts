import { createDispatchHook } from "react-redux";
import { TIngredient } from "./data";
import { store, RootState } from "../../services/store";

// export type TDispatchGetIngredients = {
//   type: typeof ;
//   data: TIngredient;
// }

// Необходимо создать свои хуки useDispatch, useSelector, useSelector и сделать типизицию


export type AppDispatch = typeof store.dispatch;


export const useDispatch = () =>
  createDispatchHook<AppDispatch | TApplicationActions | any>();