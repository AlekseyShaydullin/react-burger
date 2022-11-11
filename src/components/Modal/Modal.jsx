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
      if (e.key === 'Escape') {props.onClose()}
    }
    
    if (props.visible) {
      document.addEventListener('keydown', handleEscClose);
      body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      body.style.overflow = 'visible';
    };
  }, [props, props.visible]);

  return ReactDOM.createPortal((
    <>
    <ModalOverlay visible={props.visible} onClose={props.onClose} >
        <div className={styleModal.modal}>
          <div className={styleModal.header}>
            <h2 className='text text_type_main-large'>
              {props.title}
            </h2>
            <div className={styleModal.closeIcon}>
              <CloseIcon type="primary" onClick={props.onClose}/>
            </div>
          </div>
          <div className={styleModal.content}>
            {props.children}
          </div>
        </div>
      </ModalOverlay>
    </>
  ), modalContainer
  )
}

Modal.defaultProps = {
  title: ''
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;