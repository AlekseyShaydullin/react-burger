import React from 'react';
import styleModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from 'prop-types';


const ModalOverlay = (props) => {
  const {visible, children, onClose} = props;

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) { onClose() }
  }

  return (
    <div className={visible ? `${styleModalOverlay.overlay} + ${styleModalOverlay.overlay_active}` : `${styleModalOverlay.overlay}`} onClick={handleOverlay}>
    {children}
  </div>
  )
}

ModalOverlay.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.object,
  onClose: PropTypes.func
}

export default ModalOverlay;