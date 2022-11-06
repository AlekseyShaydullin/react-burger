import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styleModal from '../Modal/Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { modalContainer, body } from '../../utils/constants';

const Modal = (props) => {

  useEffect(() => {
    const handleEscClose = (e) => {
      e.key === 'Escape' && props.onClose();
    };
    
    document.addEventListener('keydown', handleEscClose);
    body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      body.style.overflow = 'visible';
    };
  });

  return ReactDOM.createPortal((
    <>
      <div className={`${styleModal.popup} ${styleModal.popup_active}`} >
        <ModalOverlay closeModal={props.onClose} />
        <div className={`${styleModal.modal} pt-10 pb-10 pl-10 pr-10`}>
          <div className={`${styleModal.header}`}>
            {
              props.title
              && <h3 className={`text text_type_main-large`}>{props.title}</h3>
            }
            <div className={styleModal.closeIcon} onClick={props.onClose}>
              <CloseIcon type={'primary'} />
            </div>
          </div>
          <div className={`${styleModal.container}`}>
            {props.children}
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
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;