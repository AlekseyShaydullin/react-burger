import React from 'react'
import styleIngredientDetails from '../IngredientDetails/IngredientDetails.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {
  const selectedElement = useSelector(store => store.ingredientDetail.ingredient);

  return (
    <section className={styleIngredientDetails.container}>
      <img src={selectedElement.image_large} alt={selectedElement.name} />
      <p className={`${styleIngredientDetails.title} text text_type_main-medium pt-4 pb-8`}>{selectedElement.name}</p>
      <ul className={`${styleIngredientDetails.ingredientDetails}`}>
        <li className={styleIngredientDetails.listItem}>
          <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.calories}</p>
        </li>
        <li className={styleIngredientDetails.listItem}>
          <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
          <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.proteins}</p>
        </li>
        <li className={styleIngredientDetails.listItem}>
          <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.fat}</p>
        </li>
        <li className={styleIngredientDetails.listItem}>
          <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.carbohydrates}</p>
        </li>
      </ul>
    </section>
  )
}

export default IngredientDetails;