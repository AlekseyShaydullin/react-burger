import React, { useEffect } from 'react';
import styleOrderPreRender from './OrderPreRender.module.css';
import { useDispatch, useSelector } from '../../utils/types/main';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/wsAction';
import { wsUrlAll } from '../../utils/constants';

function OrderPreRender() {
  const orders = useSelector(store => store.wsOrders.orders);
  const ingredients = useSelector(store => store.ingredients.data);
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart(wsUrlAll));
    return () => {
        dispatch(wsConnectionStop());
    };
}, [dispatch]);

  const order = orders.find(item => params.id === item._id);

  if(location.state === undefined) {
    return (order &&
      <section className={styleOrderPreRender.wrapperPage} >
        <OrderInfo order={order} ingredients={ingredients} />
      </section>
    )
  }

  return (order !== undefined && order !== null &&
    <section className={styleOrderPreRender.wrapper} >
      <OrderInfo order={order} ingredients={ingredients} />
    </section>
  )
}

export default OrderPreRender