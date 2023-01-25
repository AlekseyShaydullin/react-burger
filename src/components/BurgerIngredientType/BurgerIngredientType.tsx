import React, { forwardRef } from 'react';
import styleBurgerIngredType from './BurgerIngredientType.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { useSelector } from '../../utils/types/main';
import { Link, useLocation } from 'react-router-dom';

type TBurgerIngredientType = {
  title: string;
  id: string;
};

const BurgerIngredientType = forwardRef<HTMLLIElement, TBurgerIngredientType>(({title, id}, ref) => {
  const ingredients = useSelector(store => store.ingredients.data);
  const location = useLocation();

  return (
    <section className={styleBurgerIngredType.buns} ref={ref} id={id}>
      <h2 className={`text text_type_main-medium mb-6`}>{title}</h2>
      <ul className={`${styleBurgerIngredType.buns__list} mr-4 mb-10 ml-4`}>
        {ingredients !== undefined && ingredients !== null && ingredients.filter(ing => ing.type === id).map(ing => (
          <Link 
            className={styleBurgerIngredType.link} 
            key={ing._id} 
            to={{
              pathname: `/ingredients/${ing._id}`, 
              state: {background: location}
            }}>
              <BurgerIngredient data={ing} key={ing._id} />
            </Link>
        ))}
      </ul>
    </section>
  )
})

export default BurgerIngredientType;
