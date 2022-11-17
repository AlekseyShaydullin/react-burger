import React from 'react';
import styleModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from 'prop-types';


const ModalOverlay = (props) => {
  const {visible, closeModal} = props;

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) { closeModal() }
  }

  return (
    <div className={visible ? `${styleModalOverlay.overlay} ${styleModalOverlay.overlay_active}` : `${styleModalOverlay.overlay}`} onClick={handleOverlay}></div>
  )
}

ModalOverlay.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

export default ModalOverlay;
