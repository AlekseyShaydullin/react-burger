import React, { useEffect, useRef, useState } from 'react';
import styleBurgerIngred from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';

function BurgerIngredients(props) {
  const [current, setCurrent] = useState('bun');
  const [bunTab, setBunTab] = useState(false);
  const [sauceTab, setSauceTab] = useState(false);
  const [mainTab, setMainTab] = useState(false);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.id = 'bun' && setBunTab(entry.isIntersecting);
        entry.target.id = 'sauce' && setSauceTab(entry.isIntersecting);
        entry.target.id = 'main' && setMainTab(entry.isIntersecting);
      });
    })
    bunRef.current !== null && observer.observe(bunRef.current);
    sauceRef.current !== null && observer.observe(sauceRef.current);
    mainRef.current !== null && observer.observe(mainRef.current);
  }, [])

  useEffect(() => {
    bunTab && setCurrent('bun');
    !bunTab && sauceTab && setCurrent('sauce');
    !sauceTab && mainTab && setCurrent('main');
  }, [bunTab, sauceTab, mainTab]);

  const handlerTabClick = (tab) => {
    if(tab !== current) {
      switch (tab) {
        case 'bun':
          bunRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'sauce':
          sauceRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'main':
          mainRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
      }
    }
  }

  return (
    <section className={`${styleBurgerIngred.wrapper} mt-10`}>
      <h1 className={'text text_type_main-large'}>Соберите бургер</h1>
      <nav className={`${styleBurgerIngred.tabs} mt-5 mb-10`}>
        <Tab value={'bun'} active={current === 'bun'} onClick={handlerTabClick} id={'bun'}>
          Булки
        </Tab>
        <Tab value={'sauce'} active={current === 'sauce'} onClick={handlerTabClick} id={'sauce'}>
          Соусы
        </Tab>
        <Tab value={'main'} active={current === 'main'} onClick={handlerTabClick} id={'main'}>
          Начинки
        </Tab>
      </nav>
      <ul className={styleBurgerIngred.ingredients}>
        <BurgerIngredientType ref={bunRef} type={'bun'} title={'Булки'} openModal={props.openModal} id={'bun'} />
        <BurgerIngredientType ref={sauceRef} type={'sauce'} title={'Соусы'} openModal={props.openModal} id={'sauce'} />
        <BurgerIngredientType ref={mainRef} type={'main'} title={'Начинки'} openModal={props.openModal} id={'main'} />
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default BurgerIngredients;