import { apiUrl } from './constants';

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