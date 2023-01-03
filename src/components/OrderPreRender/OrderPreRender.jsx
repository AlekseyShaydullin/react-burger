import React from 'react';
import styleOrderPreRender from './OrderPreRender.module.css';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'

function OrderPreRender() {
  const location = useLocation();
  const params = useParams();
  const orders = useSelector(store => store.wsOrders.orders);
  const ingredients = useSelector(store => store.ingredients.data);

  const order = orders.find(item => params.id === item._id);

  console.log(location.state);

  if(location.state === undefined) {
    return (order !== undefined && 
      <section className={styleOrderPreRender.wrapperPage} >
        <OrderInfo order={order} ingredients={ingredients} />
      </section>
    )
  }

  return (order !== undefined && 
    <section className={styleOrderPreRender.wrapper} >
      <OrderInfo order={order} ingredients={ingredients} />
    </section>
  )
}

export default OrderPreRender