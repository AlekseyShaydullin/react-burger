import { ReactNode } from "react";
import { useHistory, useLocation } from "react-router-dom";
type TStatus = 'done' | 'pending' | 'created';

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredientKey = {
  _id: string;
  name: string;
  type?: string;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
  calories?: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;
  keyId?: string;
};

export type TOrderData = {
  orders: {
    _id: string;
    ingredients: Array<string>;
    status: TStatus;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
  }
  total: number;
  totalToday: number;
  length: number;
};

export type TOrder = {
  _id: string;
  ingredients: Array<string>;
  status: TStatus;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export interface IOrder {
  id: number
  order: {
    ingredients?: Array<TIngredient>;
    createdAt: string;
    number: number;
    name: string;
  };
}

export type TResponse = {
  ok: boolean;
  json: any;
}

export type TSetResetPassApi = {
  password: HTMLInputElement; 
  token: string;
}

export type TRegisterApi = {
  email: HTMLInputElement; 
  password: HTMLInputElement;
  name: HTMLInputElement;
}

export type TLoginApi = {
  email: HTMLInputElement; 
  password: HTMLInputElement;
}

export type TSetIngredients = {
  order: Array<string> | null;
}

export type TApi = TResponse
  | TSetResetPassApi
  | TRegisterApi
  | TLoginApi;

  export type TLocation = {
    background: {
      pathname: string;
      search: string;
      hash: string;
      state: null;
      key: string;
    }
    from: string;
    state?: object;
  };

  export type TModal = {
    title?: string;
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}

export type TModalOverlay = {
  visible: boolean;
  closeModal: () => void;
}
