import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import OrderIngredientImg from '../OrderIngredientImg/OrderIngredientImg';
import styleOrder from './Order.module.css'

function Order() {
  return (
    <li className={`${styleOrder.wrapper} mr-2`}>
      <div className={styleOrder.info}>
        <p className={`text text_type_digits-default`}>#034535</p>
        <p className={`text text_type_main-default text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h2 className={`text text_type_main-medium ${styleOrder.title}`}>Death Star Starship Main бургер</h2>
      <p className={`text text_type_main-default ${styleOrder.status}`}>Создан</p>
      <div className={styleOrder.details}>
        <ul className={styleOrder.ingredientsList}>
          <OrderIngredientImg />
        </ul>
        <div className={styleOrder.price}>
          <p className={`text text_type_digits-default ${styleOrder.priceScore}`}>480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
}

export default Order;