import React from 'react';
import styleBurgerIngred from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('Булки')

  return (
    <section className={styleBurgerIngred.wrapper + ' mt-10'}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <nav className={styleBurgerIngred.tabs + ' mt-5 mb-10'}>
        <li>
          <Tab value='Булки' active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value='Соусы' active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value='Начинки' active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={styleBurgerIngred.ingredients}>
        <section className={styleBurgerIngred.buns}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={styleBurgerIngred.bunslist + ' mt-6 ml-4'}>
            {data.filter((ing) => ing.type === 'bun').map((ing) => (
              <Ingredient data={ing} key={ing._id} />
            ))}
          </ul>
        </section>
        <section className='mt-10'>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={styleBurgerIngred.bunslist + ' mt-6 ml-4'}>
            {data.filter((ing) => ing.type === 'sauce').map((ing) => (
              <Ingredient data={ing} key={ing._id} />
            ))}
          </ul>
        </section>
        <section className='mt-10'>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <ul className={styleBurgerIngred.bunslist + ' mt-6 ml-4'}>
            {data.filter((ing) => ing.type === 'main').map((ing) => (
              <Ingredient data={ing} key={ing._id} />
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerIngredients;