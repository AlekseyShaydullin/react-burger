
import React, { forwardRef } from 'react';

import styleBurgerIngredType from './BurgerIngredientType.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const BurgerIngredientType = forwardRef((props, ref) => {
  const ingredients = useSelector(store => store.ingredients.data);

  return (
    <section className={styleBurgerIngredType.buns} ref={ref} id={props.id}>
      <h2 className={`text text_type_main-medium mb-6`}>{props.title}</h2>
      <ul className={`${styleBurgerIngredType.buns__list} mr-4 mb-10 ml-4`}>
        {ingredients.filter((ing) => ing.type === props.type).map((ing) => (
          <BurgerIngredient data={ing} key={ing._id} />
        ))}
      </ul>
    </section>
  )
})

BurgerIngredientType.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default BurgerIngredientType;
