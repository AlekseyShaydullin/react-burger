import React, { useContext, useMemo } from 'react'
import styleBurgerConstruct from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsContext } from '../../services/ingredientsContext';
import PropTypes from 'prop-types';

function BurgerConstructor(props) {
  const {ingredients} = useContext(IngredientsContext);
  const ingredientBun = useMemo(() => ingredients.find(ingredient => ingredient.type === 'bun'), [ingredients]);
  const ingredientNotBun = useMemo(() => ingredients.filter(ingredient => ingredient.type !== 'bun'), [ingredients]);
  const price = useMemo(() => ingredientBun.price * 2 + ingredientNotBun.reduce((a, b) => a + b.price, 0), [ingredientBun, ingredientNotBun]);
  
  //const ingredientsId =  [ingredientBun._id, ...ingredientNotBun.map(ing => ing._id), ingredientBun._id];
  // Создал массив с набором ID для запроса на создание заказа POST/orders. Но без использования redux ничего не могу придумать. 
  // Тут в компоненте создавать запрос к серверу плохо. И повторно в компоненте App использовать хук useMemo тоже плохо, так как будет дублирование кода. 

  return (
    <section className={`${styleBurgerConstruct.wrapper} mt-25 pl-4`}>
      <div className={`${styleBurgerConstruct.item__bun} pr-4`}>
        <ConstructorElement type={'top'} isLocked text={`${ingredientBun.name} (верх)`} price={ingredientBun.price} thumbnail={ingredientBun.image} />
      </div>
      <ul className={styleBurgerConstruct.filling}>
        {ingredientNotBun.map((ing) => (
          <li className={`${styleBurgerConstruct.item} pr-2`} key={ing._id}>
            <DragIcon type={'primary'} />
            <ConstructorElement text={ing.name} price={ing.price} thumbnail={ing.image} isLocked={false} />
          </li>
        ))}
      </ul>
      <div className={`${styleBurgerConstruct.item__bun} pr-4`}>
        <ConstructorElement type={'bottom'} isLocked text={`${ingredientBun.name} (низ)`} price={ingredientBun.price} thumbnail={ingredientBun.image} />
      </div>
      <div className={`${styleBurgerConstruct.order} mt-10`}>
        <div className={styleBurgerConstruct.price}>
          <p className={'text text_type_digits-medium'}>{price}</p>
          <CurrencyIcon type={'primary'} />
        </div>
        <Button type={'primary'} size={'large'} onClick={props.openModal}>Оформить заказ</Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
}

export default BurgerConstructor;