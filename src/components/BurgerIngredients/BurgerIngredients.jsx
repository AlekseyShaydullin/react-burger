import React, { useState } from 'react';
import styleBurgerIngred from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';

function BurgerIngredients(props) {
  const [current, setCurrent] = useState('bun');

  return (
    <section className={`${styleBurgerIngred.wrapper} mt-10`}>
      <h1 className={'text text_type_main-large'}>Соберите бургер</h1>
      <nav className={`${styleBurgerIngred.tabs} mt-5 mb-10`}>
        <Tab value={'bun'} active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value={'sauce'} active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value={'main'} active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <ul className={styleBurgerIngred.ingredients}>
        <BurgerIngredientType type={'bun'} title={'Булки'} openModal={props.openModal} />
        <BurgerIngredientType type={'sauce'} title={'Соусы'} openModal={props.openModal} />
        <BurgerIngredientType type={'main'} title={'Начинки'} openModal={props.openModal} />
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default BurgerIngredients;