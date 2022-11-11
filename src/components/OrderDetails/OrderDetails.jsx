import React from 'react';
import doneIndicationImg from '../../images/done.png';
import styleOrderDetails from '../OrderDetails/OrderDetails.module.css';
import {useSelector} from 'react-redux';

const OrderDetails = () => {
  const order = useSelector(store => store.order.order)

  return (
    <section className={`${styleOrderDetails.container} pb-20`}>
      <p className={`${styleOrderDetails.title} text text_type_digits-large`}>{order}</p>
      <p className={`text text_type_main-medium pt-8 pb-15`}>идентификатор заказа</p>
      <img className={styleOrderDetails.image} src={doneIndicationImg} alt={'finished'} />
      <p className={`text text_type_main-default pt-15 pb-2`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </section>
  )
};

export default OrderDetails