import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import { wsConnectionClosed, wsConnectionOpen, wsGetOrders, wsUserConnectionClosed, wsUserGetOrders } from '../../services/actions/wsAction';
import Modal from '../Modal/Modal'
import OrderInfo from '../OrderInfo/OrderInfo'

function ModalOrderInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const orders = useSelector(state => state.wsOrders.orders);
  
  const closeOrderInfoModal = () => {
    history.goBack();
  }

  return (
    <Modal onClose={closeOrderInfoModal} visible>
      <OrderInfo />
    </Modal>
  )
}

export default ModalOrderInfo