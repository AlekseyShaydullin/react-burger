import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal'
import OrderInfo from '../OrderInfo/OrderInfo'

function ModalOrderInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const orders = useSelector(state => state.wsOrders.orders);

  // console.log(orders);
  
  const closeOrderInfoModal = () => {
    dispatch()
    history.goBack();
  }

  return (orders !== null &&
    <Modal onClose={closeOrderInfoModal} visible>
      <OrderInfo />
    </Modal>
  )
}

export default ModalOrderInfo