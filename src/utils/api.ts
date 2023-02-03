import { apiUrl } from './constants';
import { getCookie } from './cookie';
import { TDataValues, TIngredient, TLoginApi, TOrder, TRegisterApi, TSetResetPassApi, TUserValues } from './types/data';

const checkRes = <T>(res: Response): Promise<T> => {
  if (res.ok) {                                       
    return res.json()
  } else {
    throw Error(`error ${res}`)
  }
}

type TRequest = <T>(url: string, options?: RequestInit) => Promise<T>;

const request: TRequest = async <T>(url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  const result: Promise<T> = checkRes(res);
  return result;
}

export async function getData() {
  return await request<TDataValues<Array<TIngredient>>>(apiUrl + 'ingredients');
}

export async function setOrderApi(order: Array<string> | null) {
  return await request<{order: TOrder | null}>(apiUrl + 'orders', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + getCookie('accessToken')},
    body: JSON.stringify({
      'ingredients': order,
    }),
  });
  }

  export async function setEmailApi(email: string) {
    return await request<TUserValues>(apiUrl + 'password-reset', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email
      }),
    });
  }

  export async function setResetPassApi({password, token} : TSetResetPassApi) {
    return await request<TUserValues>(apiUrl + 'password-reset/reset', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        token: token
      }),
    });
  }

  export async function registerApi({email, password, name}: TRegisterApi) {
    return await request<TUserValues>(apiUrl + 'auth/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    });
  }

  export async function loginApi({email, password}: TLoginApi) {
    return await request<TUserValues>(apiUrl + 'auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
  }

  export async function logoutApi() {
    return await request<TUserValues>(apiUrl + 'auth/logout', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      }),
    });
  }

  export async function refreshTokenApi() {
    return await request<TUserValues>(apiUrl + 'auth/token', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      }),
    });
  }

  export async function getUserApi() {
    return await request<TUserValues>(apiUrl + 'auth/user', {
      method: 'GET',
      headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken")
    }
    });
  }

  export async function updateUserApi({email, password, name}: TRegisterApi) {
    return await request<TUserValues>(apiUrl + 'auth/user', {
      method: 'PATCH',
      headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken")
    },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
  }
