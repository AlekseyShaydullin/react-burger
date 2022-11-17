import { useDispatch, useSelector } from "react-redux";
import { deleteIngredientDetails } from "../../services/actions/showIngredientDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails"
import Modal from "../Modal/Modal"

const ModalIngredient = () => {
  const { ingredient } = useSelector(store => store.ingredientDetail)
  const dispatch = useDispatch();

  const closeIngredientModal = () => {
    dispatch(deleteIngredientDetails())
  }

  return( ingredient !== null && 
    <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible={true}>
      <IngredientDetails />
    </Modal>
  )
}

export default ModalIngredient