import { useDispatch, useSelector } from '../../utils/types/main';
import { resetIngredients } from "../../services/actions/currentBurger";
import { resetOrder } from "../../services/actions/stateOrder";
import Modal from "../Modal/Modal"
import OrderDetails from "../OrderDetails/OrderDetails"
import { FC } from 'react';

const ModalOrder: FC = () => {
  const { order } = useSelector(store => store.orderNumber)
  const dispatch = useDispatch();

  const closeOrderModal = () => {
    dispatch(resetOrder());
    dispatch(resetIngredients())
  }

  return (
    <>
      {order !== null && (
        <Modal onClose={closeOrderModal} visible>
          <OrderDetails order={order} />
        </Modal>
      )}
    </>
  )
}

export default ModalOrder