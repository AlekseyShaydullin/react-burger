import React, { useEffect } from 'react';
import styleOrderPreRender from './OrderPreRender.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'
import { wsConnectionClosed, wsConnectionOpen } from '../../services/actions/wsAction';

function OrderPreRender() {
  const location = useLocation();
  const params = useParams();
  const orders = useSelector(store => store.wsOrders.orders);
  const ingredients = useSelector(store => store.ingredients.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionOpen());
    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [dispatch])

  const order = orders.find(item => params.id === item._id);

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