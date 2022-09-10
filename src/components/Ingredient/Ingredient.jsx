import React from 'react';
import styleIngredient from './Ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';

function Ingredient({ data }) {
  const [count, setCount] = React.useState(0);

  return (
    <li className={styleIngredient.wrapper}>
      <img className={styleIngredient.img + ' pr-4 pl-4'} src={data.image} alt={data.name} />
      <div className={styleIngredient.price + ' pt-1 pb-1'}>
        <p className='text text_type_digits-default'>{data.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className='text text_type_main-default'>{data.name}</p>
      <Counter className={styleIngredient.count} count={count} size='default' onClick={setCount} />
    </li>
  )
}

Ingredient.prototype = {
  data: ingredientType
}

export default Ingredient;