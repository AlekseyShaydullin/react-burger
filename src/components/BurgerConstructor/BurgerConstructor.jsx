import React from 'react'
import styleBurgerConstruct from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

function BurgerConstructor({ data }) {
  return (
    <section className={styleBurgerConstruct.wrapper + ' mt-25 pl-4'}>
      <div className={styleBurgerConstruct.itembun + ' pr-4'}>
        <ConstructorElement type='top' isLocked={true} text={data[0].name + ' (верх)'} price={data[0].price} thumbnail={data[0].image} />
      </div>
      <ul className={styleBurgerConstruct.filling}>
        {data.filter((ing) => ing.type !== 'bun').map((ing) => (
          <li className={styleBurgerConstruct.item + ' pr-2'} key={ing._id}>
            <DragIcon type='primary' />
            <ConstructorElement text={ing.name} price={ing.price} thumbnail={ing.image} />
          </li>
        ))}
      </ul>
      <div className={styleBurgerConstruct.itembun + ' pr-4'}>
        <ConstructorElement type='top' isLocked={true} text={data[0].name + ' (низ)'} price={data[0].price} thumbnail={data[0].image} />
      </div>
      <div className={styleBurgerConstruct.order + ' mt-10'}>
        <div className={styleBurgerConstruct.price}>
          <p className='text text_type_digits-medium'>610</p>
          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='large'>Оформить заказ</Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerConstructor;