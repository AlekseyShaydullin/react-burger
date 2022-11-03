import React, { useContext } from 'react';
import styleBurgerIngredType from './BurgerIngredientType.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../../services/ingredientsContext';

function BurgerIngredientType(props) {
  const {ingredients} = useContext(IngredientsContext);

  return (
    <section className={styleBurgerIngredType.buns}>
      <h2 className={`text text_type_main-medium mb-6`}>{props.title}</h2>
      <ul className={`${styleBurgerIngredType.buns__list} mr-4 mb-10 ml-4`}>
        {ingredients.filter((ing) => ing.type === props.type).map((ing) => (
          <BurgerIngredient data={ing} key={ing._id} openModal={props.openModal} />
        ))}
      </ul>
    </section>
  )
}

BurgerIngredientType.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired
}

export default BurgerIngredientType;
