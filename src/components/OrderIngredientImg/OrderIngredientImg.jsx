import React from 'react';
import styleOrderIngredientImg from './OrderIngredientImg.module.css';

function OrderIngredientImg(props) {
  return (
    <div className={styleOrderIngredientImg.wrapper}>
      <div className={styleOrderIngredientImg.img}>
        <img className={styleOrderIngredientImg.pic} src={props.item} alt={props.alt} />
      </div>
    </div>
  )
}

export default OrderIngredientImg