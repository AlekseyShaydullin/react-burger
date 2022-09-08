import React from 'react';
import styleBurgerIngred from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
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
      <div className={styleBurgerIngred.Ingredients}>
        <div className={styleBurgerIngred.buns}>
          <h2 className='text text_type_main-medium'>Булки</h2>
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients;