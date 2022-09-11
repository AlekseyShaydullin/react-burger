import React from 'react';
import styleBurgerIngredient from './BurgerIngredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';

function BurgerIngredient({ data }) {
  const [count, setCount] = React.useState(0);

  return (
    <li className={`${styleBurgerIngredient.wrapper} mb-8`}>
      <img className={`${styleBurgerIngredient.img} pr-4 pl-4`} src={data.image} alt={data.name} />
      <div className={`${styleBurgerIngredient.price} pt-1 pb-1`}>
        <p className={'text text_type_digits-default'}>{data.price}</p>
        <CurrencyIcon type={'primary'} />
      </div>
      <p className={'text text_type_main-default'}>{data.name}</p>
      <Counter className={styleBurgerIngredient.count} count={count} size={'default'} onClick={setCount} />
    </li>
  )
}

BurgerIngredient.propTypes = {
  data: ingredientType.isRequired
}

export default BurgerIngredient;