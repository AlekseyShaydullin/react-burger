import React, { useEffect } from 'react';
import styleOrderAuthPreRender from './OrderAuthPreRender.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'
import { wsAuthConnectionStart, wsConnectionStop } from '../../services/actions/wsAction';
import { getIngredients, getWsOrders, wsUrl } from '../../utils/constants';

function OrderAuthPreRender() {
  const orders = useSelector(getWsOrders);
  const ingredients = useSelector(getIngredients);
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsAuthConnectionStart(wsUrl));
    return () => {
        dispatch(wsConnectionStop());
    };
}, [dispatch]);

  const order = orders.find(item => params.id === item._id);

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