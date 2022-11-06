import React from 'react';
import styleModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from 'prop-types';


const ModalOverlay = (props) => {

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) { props.closeModal() }
  }

  return (
    <div className={`${styleModalOverlay.overlay}`} onClick={handleOverlay}></div>
  )
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default ModalOverlay;