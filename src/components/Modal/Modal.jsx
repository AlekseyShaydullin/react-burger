import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styleModal from '../Modal/Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { modalContainer, body } from '../../utils/constants';

const Modal = ({ activeModal, onClose, title, children }) => {

  useEffect(() => {
    const handleEscClose = (e) => {
      e.key === 'Escape' && onClose();
    };
    if (activeModal) {
      document.addEventListener('keydown', handleEscClose);
      body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      body.style.overflow = 'visible';
    };
  }, [activeModal]);




  return ReactDOM.createPortal((
    <>
      <div className={activeModal ? `${styleModal.popup} ${styleModal.popup_active}` : `${styleModal.popup}`} >
        <ModalOverlay closeModal={onClose} />
        <div className={`${styleModal.modal} pt-10 pb-10 pl-10 pr-10`}>
          <div className={`${styleModal.header}`}>
            {
              title
              && <h3 className={`text text_type_main-large`}>{title}</h3>
            }
            <div className={styleModal.closeIcon} onClick={onClose}>
              <CloseIcon type={'primary'} />
            </div>
          </div>
          <div className={`${styleModal.container}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  ), modalContainer
  )
}

Modal.defaultProps = {
  title: ''
}

Modal.propTypes = {
  activeModal: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;