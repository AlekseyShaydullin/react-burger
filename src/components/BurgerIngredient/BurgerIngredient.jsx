import React from 'react';
import styleBurgerIngredient from './BurgerIngredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {showIngredientDetails} from '../../services/actions/showIngredientDetails';
import { useDrag } from 'react-dnd';

function BurgerIngredient(props) {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients);
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: props.data,
  });

  const openModal = () => {
    dispatch(showIngredientDetails(props.data))
  }

  const setCounter = () => {
    if (props.data.type !== 'bun') {
      return ingredients !== null && ingredients.reduce((acc,item) => acc + (item._id === props.data._id), 0)
    } else if (bun?._id === props.data._id) {
      return 2
    } else return 0
  }
  
  const counter = setCounter();
  
  return (
    <>
      <li className={`${styleBurgerIngredient.wrapper} mb-8`} ref={dragRef} onClick={openModal}>
        <img className={`${styleBurgerIngredient.img} pr-4 pl-4`} src={props.data.image} alt={props.data.name} />
        <div className={`${styleBurgerIngredient.price} pt-1 pb-1`}>
          <p className={'text text_type_digits-default'}>{props.data.price}</p>
          <CurrencyIcon type={'primary'} />
        </div>
        <p className={'text text_type_main-default'}>{props.data.name}</p>
        {counter !== 0 ? <Counter className={styleBurgerIngredient.count} size={'default'} count={counter} /> : null}
      </li>
    </>
  )
}

BurgerIngredient.propTypes = {
  data: ingredientType,
}

export default BurgerIngredient;