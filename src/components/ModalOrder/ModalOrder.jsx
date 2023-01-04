import { useDispatch, useSelector } from "react-redux";
import { resetIngredients } from "../../services/actions/currentBurger";
import { resetOrder } from "../../services/actions/stateOrder";
import Modal from "../Modal/Modal"
import OrderDetails from "../OrderDetails/OrderDetails"

const ModalOrder = () => {
  const { order } = useSelector(store => store.order)
  const dispatch = useDispatch();

  const closeOrderModal = () => {
    dispatch(resetOrder());
    dispatch(resetIngredients())
  }

  return (order !== null &&
    <Modal onClose={closeOrderModal} visible={true}>
      <OrderDetails />
    </Modal>
  )
}

export default ModalOrder