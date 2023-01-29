import React, { FC } from 'react';
import styleOrderIngredientImg from './OrderIngredientImg.module.css';

type TOrderIngredientImgProps = {
  img: string;
  alt: string;
}

const OrderIngredientImg: FC<TOrderIngredientImgProps> = (props) => {

  return (
    <div className={styleOrderIngredientImg.wrapper}>
      <div className={styleOrderIngredientImg.img}>
        <img className={styleOrderIngredientImg.pic} src={props.img} alt={props.alt} />
      </div>
    </div>
  )
}

export default OrderIngredientImg