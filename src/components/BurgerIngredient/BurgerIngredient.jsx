import React from 'react';
import styleBurgerIngredient from './BurgerIngredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

function BurgerIngredient(props) {

  return (
    <li className={`${styleBurgerIngredient.wrapper} mb-8`} onClick={() => { props.openModal(props.data) }}>
      <img className={`${styleBurgerIngredient.img} pr-4 pl-4`} src={props.data.image} alt={props.data.name} />
      <div className={`${styleBurgerIngredient.price} pt-1 pb-1`}>
        <p className={'text text_type_digits-default'}>{props.data.price}</p>
        <CurrencyIcon type={'primary'} />
      </div>
      <p className={'text text_type_main-default'}>{props.data.name}</p>
      <Counter className={styleBurgerIngredient.count} count={1} size={'default'} />
    </li>
  )
}

BurgerIngredient.propTypes = {
  data: ingredientType,
  openModal: PropTypes.func.isRequired
}

export default BurgerIngredient;