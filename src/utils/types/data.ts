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
  password: string; 
  token: string
}

export type TRegisterApi = {
  email: string; 
  password: string;
  name: string;
}

export type TLoginApi = {
  email: string; 
  password: string;
}