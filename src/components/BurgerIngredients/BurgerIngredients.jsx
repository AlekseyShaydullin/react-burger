import React from 'react';
import styleBurgerIngred from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('bun')

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
        <BurgerIngredientType data={data} type={'bun'} title={'Булки'} />
        <BurgerIngredientType data={data} type={'sauce'} title={'Соусы'} />
        <BurgerIngredientType data={data} type={'main'} title={'Начинки'} />
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
}

export default BurgerIngredients;