import React from 'react'
import styleIngredientCard from './IngredientCard.module.css'

function IngredientCard({selectedElement}) {
  return (
      <>
        <img src={selectedElement.image_large} alt={selectedElement.name} />
        <p className={`${styleIngredientCard.title} text text_type_main-medium pt-4 pb-8`}>{selectedElement.name}</p>
        <ul className={`${styleIngredientCard.ingredientDetails}`}>
          <li className={styleIngredientCard.listItem}>
            <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.calories}</p>
          </li>
          <li className={styleIngredientCard.listItem}>
            <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.proteins}</p>
          </li>
          <li className={styleIngredientCard.listItem}>
            <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.fat}</p>
          </li>
          <li className={styleIngredientCard.listItem}>
            <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{selectedElement.carbohydrates}</p>
          </li>
        </ul>
      </>
  )
}

export default IngredientCard;