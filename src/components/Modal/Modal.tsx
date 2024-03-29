import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styleModal from '../Modal/Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { modalContainer, body } from '../../utils/constants';
import { TModal } from '../../utils/types/data';

const Modal: FC<TModal> = (props) => {

  useEffect(() => {
    const handleEscClose = (e: {key: string}) => {
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
    <div className={props.visible ? `${styleModal.popup} ${styleModal.popup_active}` : `${styleModal.popup}`}>
      <ModalOverlay closeModal={props.onClose} visible={props.visible} />
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
  ), modalContainer
  )
}

export default Modal;