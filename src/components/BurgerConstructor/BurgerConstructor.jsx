import React from 'react'
import styleBurgerConstruct from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

function BurgerConstructor(props) {
  return (
    <section className={`${styleBurgerConstruct.wrapper} mt-25 pl-4`}>
      <div className={`${styleBurgerConstruct.item__bun} pr-4`}>
        <ConstructorElement type={'top'} isLocked text={`${props.data[0].name} (верх)`} price={props.data[0].price} thumbnail={props.data[0].image} />
      </div>
      <ul className={styleBurgerConstruct.filling}>
        {props.data.filter((ing) => ing.type !== 'bun').map((ing) => (
          <li className={`${styleBurgerConstruct.item} pr-2`} key={ing._id}>
            <DragIcon type={'primary'} />
            <ConstructorElement text={ing.name} price={ing.price} thumbnail={ing.image} isLocked={false} />
          </li>
        ))}
      </ul>
      <div className={`${styleBurgerConstruct.item__bun} pr-4`}>
        <ConstructorElement type={'bottom'} isLocked text={`${props.data[0].name} (низ)`} price={props.data[0].price} thumbnail={props.data[0].image} />
      </div>
      <div className={`${styleBurgerConstruct.order} mt-10`}>
        <div className={styleBurgerConstruct.price}>
          <p className={'text text_type_digits-medium'}>610</p>
          <CurrencyIcon type={'primary'} />
        </div>
        <Button type={'primary'} size={'large'} onClick={props.openModal}>Оформить заказ</Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired
}

export default BurgerConstructor;