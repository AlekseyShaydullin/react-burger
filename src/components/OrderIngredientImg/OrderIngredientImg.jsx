import React from 'react';
import styleOrderIngredientImg from './OrderIngredientImg.module.css';
import PropTypes from "prop-types";

function OrderIngredientImg(props) {

  return (
    <div className={styleOrderIngredientImg.wrapper}>
      <div className={styleOrderIngredientImg.img}>
        <img className={styleOrderIngredientImg.pic} src={props.img} alt={props.alt} />
      </div>
    </div>
  )
}

OrderIngredientImg.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default OrderIngredientImg