import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import OrderIngredientImg from '../OrderIngredientImg/OrderIngredientImg';
import styleOrderInfo from './OrderInfo.module.css';

function OrderInfo() {
  return (
    <section className={styleOrderInfo.wrapper}>
      <p className={`text text_type_digits-default ${styleOrderInfo.orderNumber}`}>#034533</p>
      <h1 className={`text text_type_main-medium ${styleOrderInfo.title} mt-10`}>Black Hole Singularity острый бургер</h1>
      <p className={`text text_type_main-default ${styleOrderInfo.status} mt-3`}>Выполнен</p>
      <p className={`text text_type_main-medium ${styleOrderInfo.title} mt-15`}>Состав:</p>
      <ul className={styleOrderInfo.ingredients}>
        <li className={styleOrderInfo.ingredient}>
          <OrderIngredientImg />
          <p className={`text text_type_main-default`}>Флюоресцентная булка R2-D3</p>
          <div className={styleOrderInfo.price}>
            <p className={`text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styleOrderInfo.ingredient}>
          <OrderIngredientImg />
          <p className={`text text_type_main-default`}>Флюоресцентная булка R2-D3</p>
          <div className={styleOrderInfo.price}>
            <p className={`text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styleOrderInfo.ingredient}>
          <OrderIngredientImg />
          <p className={`text text_type_main-default`}>Флюоресцентная булка R2-D3</p>
          <div className={styleOrderInfo.price}>
            <p className={`text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styleOrderInfo.ingredient}>
          <OrderIngredientImg />
          <p className={`text text_type_main-default`}>Флюоресцентная булка R2-D3</p>
          <div className={styleOrderInfo.price}>
            <p className={`text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styleOrderInfo.ingredient}>
          <OrderIngredientImg />
          <p className={`text text_type_main-default`}>Флюоресцентная булка R2-D3</p>
          <div className={styleOrderInfo.price}>
            <p className={`text text_type_digits-default`}>2 x 20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <div className={styleOrderInfo.footer}>
        <p className={`text text_type_main-default text_color_inactive`}>Вчера, 13:50 i-GMT+3</p>
        <div className={styleOrderInfo.totalPrice}>
          <p className={`text text_type_digits-default`}>510</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

export default OrderInfo