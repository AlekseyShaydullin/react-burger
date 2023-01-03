import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal';
import OrderPreRender from '../OrderPreRender/OrderPreRender';

function ModalOrderInfo() {
  const history = useHistory();
  
  const closeOrderInfoModal = () => {
    history.goBack();
  }

  return (
    <Modal onClose={closeOrderInfoModal} visible>
      <OrderPreRender />
    </Modal>
  )
}

export default ModalOrderInfo