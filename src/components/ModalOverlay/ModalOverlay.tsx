import React, { FC, MouseEventHandler } from 'react';
import { TModalOverlay } from '../../utils/types/data';
import styleModalOverlay from '../ModalOverlay/ModalOverlay.module.css'

const ModalOverlay: FC<TModalOverlay> = (props) => {
  const {visible, closeModal} = props;

  const handleOverlay: MouseEventHandler = e => {
    if (e.target === e.currentTarget) { closeModal() }
  }

  return (
    <div className={visible ? `${styleModalOverlay.overlay} ${styleModalOverlay.overlay_active}` 
      : `${styleModalOverlay.overlay}`} onClick={handleOverlay}></div>
  )
}

export default ModalOverlay;
