import React, { useRef, useState } from 'react';
import styleBurgerIngred from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';

function BurgerIngredients() {
  const Tabs = {
    BUN: 'bun',
    SAUCE: 'sauce',
    MAIN: 'main'
  }

  const [current, setCurrent] = useState(Tabs.BUN);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handlerTabClick = (tab) => {
    if(tab !== current) {
      switch (tab) {
        case 'bun':
          bunRef.current.scrollIntoView({ behavior: 'smooth' });
          setCurrent(Tabs.BUN);
          break;
        case 'sauce':
          sauceRef.current.scrollIntoView({ behavior: 'smooth' });
          setCurrent(Tabs.SAUCE);
          break;
        case 'main':
          mainRef.current.scrollIntoView({ behavior: 'smooth' });
          setCurrent(Tabs.MAIN);
          break;
        default: return bunRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <section className={`${styleBurgerIngred.wrapper} mt-10`}>
      <h1 className={'text text_type_main-large'}>Соберите бургер</h1>
      <nav className={`${styleBurgerIngred.tabs} mt-5 mb-10`}>
        <Tab value={'bun'} active={current === Tabs.BUN} onClick={handlerTabClick} id={'bun'}>
          Булки
        </Tab>
        <Tab value={'sauce'} active={current === Tabs.SAUCE} onClick={handlerTabClick} id={'sauce'}>
          Соусы
        </Tab>
        <Tab value={'main'} active={current === Tabs.MAIN} onClick={handlerTabClick} id={'main'}>
          Начинки
        </Tab>
      </nav>
      <ul className={styleBurgerIngred.ingredients}>
        <BurgerIngredientType ref={bunRef} type={'bun'} title={'Булки'} id={'bun'} />
        <BurgerIngredientType ref={sauceRef} type={'sauce'} title={'Соусы'} id={'sauce'} />
        <BurgerIngredientType ref={mainRef} type={'main'} title={'Начинки'} id={'main'} />
      </ul>
    </section>
  )
}

export default BurgerIngredients;