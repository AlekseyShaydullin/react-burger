import { useDispatch, useSelector } from '../../utils/types/main';
import { useHistory, useLocation } from "react-router-dom";
import { deleteIngredientDetails } from "../../services/actions/showIngredientDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails"
import Modal from "../Modal/Modal"
import { FC } from 'react';
import { TLocation} from '../../utils/types/data';

const ModalIngredient: FC = () => {
  const { ingredient } = useSelector(store => store.ingredientDetail)
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocation>()

  const closeIngredientModal = () => {
    dispatch(deleteIngredientDetails());
    history.goBack();
  }

  if(location.pathname !== history.location.pathname) {
    return(
      <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible>
        <IngredientDetails />
      </Modal>
    )
  }

  return( 
    <>
      {(ingredient !== null && ingredient !== undefined &&
        <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible>
          <IngredientDetails />
        </Modal>
      )}
    </>

  )
}

export default ModalIngredient