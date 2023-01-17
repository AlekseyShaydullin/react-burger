import { apiUrl } from './constants';
import { getCookie } from './cookie';
import { TLoginApi, TRegisterApi, TResponse, TSetResetPassApi } from './types/data';

function checkRes(res: TResponse) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res}`)
}

async function request(url: string, options?: {}) {
  const res = await fetch(`${apiUrl}${url}`, options);
  return checkRes(res);
}

export async function getData() {
  return await request('ingredients');
}

export async function setOrderApi(order: Array<string> | null) {
  return await request('orders', {
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
    return await request('password-reset', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email
      }),
    });
  }

  export async function setResetPassApi({password, token} : TSetResetPassApi) {
    return await request('password-reset/reset', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        token: token
      }),
    });
  }

  export async function registerApi({email, password, name}: TRegisterApi) {
    return await request('auth/register', {
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
    return await request('auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
  }

  export async function logoutApi() {
    return await request('auth/logout', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      }),
    });
  }

  export async function refreshTokenApi() {
    return await request('auth/token', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      }),
    });
  }

  export async function getUserApi() {
    return await request('auth/user', {
      method: 'GET',
      headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken")
    }
    });
  }

  export async function updateUserApi({email, password, name}: TRegisterApi) {
    return await request('auth/user', {
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
