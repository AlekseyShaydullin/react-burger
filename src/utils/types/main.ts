import { createDispatchHook, useSelector as selectorHook, TypedUseSelectorHook } from "react-redux";
import { store, RootState } from "../../services/store";
import { TActionCurrentBurger } from "../../services/reducers/currentBurgerReducer";
import { TActionIngredients } from "../../services/reducers/ingredientsReducer";
import { TActionOrder } from "../../services/reducers/setOrderReducer";
import { TActionIngredientDetails } from "../../services/reducers/showIngredientDetailsReducer";
import { TActionUsers } from "../../services/reducers/usersReducer";
import { TWSActionData } from "../../services/reducers/wsReducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { TWSActions } from "../../services/actions/wsAction";

export type AppDispatch = typeof store.dispatch;

export type TApplicationActions = 
  TActionCurrentBurger
  | TActionIngredients
  | TActionOrder
  | TActionIngredientDetails
  | TActionUsers
  | TWSActions
  | TWSActionData;

export const useDispatch = () =>
  createDispatchHook<AppDispatch | TApplicationActions | any>();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type AppThunk<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;