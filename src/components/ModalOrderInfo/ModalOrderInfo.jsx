import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';
import OrderAuthPreRender from '../OrderAuthPreRender/OrderAuthPreRender';
import OrderPreRender from '../OrderPreRender/OrderPreRender';

function ModalOrderInfo() {
  const history = useHistory();
  const location = useLocation();
  
  const closeOrderInfoModal = () => {
    history.goBack();
  }

  console.log(location);

  return (
    <Modal onClose={closeOrderInfoModal} visible>
      {location.state.background.pathname === '/profile/orders' ? <OrderAuthPreRender /> : <OrderPreRender />}
    </Modal>
  )
}

export default ModalOrderInfo