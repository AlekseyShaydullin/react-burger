import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL_ORDER } from "../../services/actions/modal";
import Modal from "../Modal/Modal"
import OrderDetails from "../OrderDetails/OrderDetails"

const ModalOrder = () => {
  const {modalOrder} = useSelector(store => store.modal)
  const dispatch = useDispatch();

  const closeOrderModal = () => {
    dispatch({
      type: CLOSE_MODAL_ORDER
    })
  };

  return (
    <>
      <Modal onClose={closeOrderModal} visible={modalOrder}>
        <OrderDetails />
      </Modal>
    </>
  )
}

export default ModalOrder