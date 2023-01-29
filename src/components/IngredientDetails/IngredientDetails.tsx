import React, { FC, useEffect } from 'react'
import styleIngredientDetails from '../IngredientDetails/IngredientDetails.module.css';
import { useDispatch, useSelector } from '../../utils/types/main';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { showIngredientDetails } from '../../services/actions/showIngredientDetails';
import IngredientCard from '../IngredientCard/IngredientCard';
import { TLocation } from '../../utils/types/data';

const IngredientDetails: FC = () => {
  const selectedElement = useSelector(store => store.ingredientDetail.ingredient);
  const ingredients = useSelector(store => store.ingredients.data);
  const { isLoading } = useSelector(store => store.ingredients);
  const { id } = useParams<{id: string}>();
  const location = useLocation<TLocation>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoading && ingredients !== null) {
      const findItem = ingredients.find(i => i._id === id);
      findItem !== undefined && dispatch(showIngredientDetails(findItem));
    }
  }, [dispatch, id, ingredients, isLoading])

  if(location.pathname === history.location.pathname) {
    return ( 
      <>
        {(selectedElement !== null && selectedElement !== undefined && (
          <section className={styleIngredientDetails.container_page}>
            <h3 className={`${styleIngredientDetails.title_page} text text_type_main-large`}>Детали ингредиента</h3>
            <IngredientCard selectedElement={selectedElement} />
          </section>
        ))}
      </>
    )
  }

  return (selectedElement !== null && selectedElement !== undefined ? (
    <section className={styleIngredientDetails.container}>
      <IngredientCard selectedElement={selectedElement} />
    </section>
  ) : (
    <img className={styleIngredientDetails.img} src='https://acegif.com/wp-content/uploads/loading-5.gif' alt='Загрузка' />
  ))
}

export default IngredientDetails;