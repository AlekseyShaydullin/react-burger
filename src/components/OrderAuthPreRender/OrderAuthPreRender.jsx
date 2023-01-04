import React, { useEffect } from 'react';
import styleOrderAuthPreRender from './OrderAuthPreRender.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'
import { wsConnectionClosed, wsConnectionOpen, WS_CONNECTION_START, WS_CONNECTION_STOP } from '../../services/actions/wsAction';

function OrderAuthPreRender() {
  const location = useLocation();
  const params = useParams();
  const orders = useSelector(store => store.wsOrders.orders);
  const ingredients = useSelector(store => store.ingredients.data);
  const dispatch = useDispatch();

  console.log(orders);

  useEffect(() => {
    dispatch({
        type: WS_CONNECTION_START,
        payload: {
            url: "wss://norma.nomoreparties.space/orders",
            isAuth: true,
        },
    });
    return () => {
        dispatch({
            type: WS_CONNECTION_STOP,
        });
    };
}, [dispatch]);

  const order = orders.find(item => params.id === item._id);

  console.log(order);
  
  if(location.state === undefined) {
    return (order !== undefined && order !== null &&
      <section className={styleOrderAuthPreRender.wrapperPage} >
        <OrderInfo order={order} ingredients={ingredients} />
      </section>
    )
  }

  return (order !== undefined && order !== null &&
    <section className={styleOrderAuthPreRender.wrapper} >
      <OrderInfo order={order} ingredients={ingredients} />
    </section>
  )
}

export default OrderAuthPreRender