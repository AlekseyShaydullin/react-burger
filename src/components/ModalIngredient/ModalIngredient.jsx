import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL_INGREDIENT } from "../../services/actions/modal";
import { deleteIngredientDetails } from "../../services/actions/showIngredientDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails"
import Modal from "../Modal/Modal"

const ModalIngredient = () => {
  const {modalIngredient} = useSelector(store => store.modal)
  const dispatch = useDispatch();

  const closeIngredientModal = () => {
    dispatch({
      type: CLOSE_MODAL_INGREDIENT
    })
    dispatch(deleteIngredientDetails())
  }
  
  return(
    <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible={modalIngredient}>
      <IngredientDetails />
    </Modal>
  )
}

export default ModalIngredient