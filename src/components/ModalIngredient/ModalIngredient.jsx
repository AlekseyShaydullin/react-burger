import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteIngredientDetails } from "../../services/actions/showIngredientDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails"
import Modal from "../Modal/Modal"

const ModalIngredient = () => {
  const { ingredient } = useSelector(store => store.ingredientDetail)
  const dispatch = useDispatch();
  const history = useHistory();

  const closeIngredientModal = () => {
    dispatch(deleteIngredientDetails());
    history.goBack();
  }

  return( ingredient !== null && ingredient !== undefined &&
    <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible={true}>
      <IngredientDetails />
    </Modal>
  )
}

export default ModalIngredient