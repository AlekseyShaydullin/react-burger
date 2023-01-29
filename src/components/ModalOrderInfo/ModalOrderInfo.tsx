import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TLocation } from '../../utils/types/data';
import Modal from '../Modal/Modal';
import OrderAuthPreRender from '../OrderAuthPreRender/OrderAuthPreRender';
import OrderPreRender from '../OrderPreRender/OrderPreRender';

const ModalOrderInfo: FC = () => {
  const history = useHistory();
  const location = useLocation<TLocation>();
  
  const closeOrderInfoModal = () => {
    history.goBack();
  }

  return (
    <Modal onClose={closeOrderInfoModal} visible>
      {location.state.background.pathname === '/profile/orders' ? <OrderAuthPreRender /> : <OrderPreRender />}
    </Modal>
  )
}

export default ModalOrderInfo