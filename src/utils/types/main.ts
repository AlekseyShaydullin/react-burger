import { useDispatch as dispatchHook, useSelector as selectorHook, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../services/store";
import { TActionCurrentBurger } from "../../services/reducers/currentBurgerReducer";
import { TActionIngredients } from "../../services/reducers/ingredientsReducer";
import { TActionOrder } from "../../services/reducers/setOrderReducer";
import { TActionIngredientDetails } from "../../services/reducers/showIngredientDetailsReducer";
import { TActionUsers } from "../../services/reducers/usersReducer";
import { TWSActionData } from "../../services/reducers/wsReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TWSActions } from "../../services/actions/wsAction";

export type TApplicationActions = 
  TActionCurrentBurger
  | TActionIngredients
  | TActionOrder
  | TActionIngredientDetails
  | TActionUsers
  | TWSActions
  | TWSActionData;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export const useDispatch = () => dispatchHook<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;