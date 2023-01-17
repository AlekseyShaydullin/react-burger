export const apiUrl = 'https://norma.nomoreparties.space/api/';
export const wsUrl = 'wss://norma.nomoreparties.space/orders';
export const wsUrlAll = 'wss://norma.nomoreparties.space/orders/all';
export const body = document.querySelector('body');
export const modalContainer = document.getElementById('modal-root');

export const getWsOrders = store => store.wsOrders.orders;
export const getWsOrdersData = store => store.wsOrders;

export const getIngredients = store => store.ingredients.data;
export const getIngredientLoading = store => store.ingredients;
export const getIngredientDetail = store => store.ingredientDetail.ingredient;
export const getIngredient = store => store.ingredientDetail;
export const getBurgerIngredients = store => store.burgerIngredients;
export const getUser = store => store.userInfo;
export const getOrder = store => store.order;

