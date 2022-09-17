import React from 'react';
import styleModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from 'prop-types';


const ModalOverlay = (props) => {

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) { props.closeModal() }
  }

  return (
    <section className={props.isActive ? `${styleModalOverlay.overlay} ${styleModalOverlay.overlay_active}` : `${styleModalOverlay.overlay}`} onClick={handleOverlay}>
      <div className={styleModalOverlay.content}>{props.children}</div>
    </section>
  )
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default ModalOverlay;