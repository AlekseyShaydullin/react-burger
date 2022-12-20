import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { deleteIngredientDetails } from "../../services/actions/showIngredientDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails"
import Modal from "../Modal/Modal"

const ModalIngredient = () => {
  const { ingredient } = useSelector(store => store.ingredientDetail)
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation()

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

  return( ingredient !== null && ingredient !== undefined &&
    <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible>
      <IngredientDetails />
    </Modal>
  )
}

export default ModalIngredient