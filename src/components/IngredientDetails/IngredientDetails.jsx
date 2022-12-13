import React, { useEffect } from 'react'
import styleIngredientDetails from '../IngredientDetails/IngredientDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { showIngredientDetails } from '../../services/actions/showIngredientDetails';

const IngredientDetails = () => {
  const selectedElement = useSelector(store => store.ingredientDetail.ingredient);
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredients.data);
  const { isLoading } = useSelector(store => store.ingredients);
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if(isLoading) {
      const findItem = ingredients.find(i => i._id === id);
      dispatch(showIngredientDetails(findItem));
    }
  }, [dispatch, id, ingredients, isLoading])

  if(location.pathname === history.location.pathname) {
    return ( selectedElement !== null && (
      <section className={styleIngredientDetails.container_page}>
        <h3 className={`${styleIngredientDetails.title_page} text text_type_main-large`}>Детали ингредиента</h3>
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
    ))
  }

  return ( selectedElement !== null && selectedElement !== undefined ? (
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
  ) : (
    'Загрузка'
  ))
}

export default IngredientDetails;