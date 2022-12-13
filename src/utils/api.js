import { apiUrl } from './constants';
import { getCookie } from './cookie';

function checkRes(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res}`)
}

export async function getData() {
  const res = await fetch(`${apiUrl}ingredients`);
  return checkRes(res);
}

export async function setOrderApi(ingredients) {
  const res = await fetch(`${apiUrl}orders`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      'ingredients': ingredients,
    }),
  });
  return checkRes(res);
  }

  export async function setEmailApi(email) {
    const res = await fetch(`${apiUrl}password-reset`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email
      }),
    });
  return checkRes(res);
  }

  export async function setResetPassApi({password, token}) {
    const res = await fetch(`${apiUrl}password-reset/reset`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        token: token
      }),
    });
  return checkRes(res);
  }

  export async function registerApi({email, password, name}) {
    const res = await fetch(`${apiUrl}auth/register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    });
  return checkRes(res);
  }

  export async function loginApi({email, password}) {
    const res = await fetch(`${apiUrl}auth/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });
  return checkRes(res);
  }

  export async function logoutApi() {
    const res = await fetch(`${apiUrl}auth/logout`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      }),
    });
  return checkRes(res);
  }

  export async function refreshTokenApi() {
    const res = await fetch(`${apiUrl}auth/token`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      }),
    });
  return checkRes(res);
  }

  export async function getUserApi() {
    const res = await fetch(`${apiUrl}auth/user`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token")
    }
    });
  return checkRes(res);
  }

  export async function updateUserApi({email, password, name}) {
    const res = await fetch(`${apiUrl}auth/user`, {
      method: 'PATCH',
      headers: { 
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token")
    },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
  return checkRes(res);
  }