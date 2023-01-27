import React, { FC, useEffect } from 'react';
import styleOrderPreRender from './OrderPreRender.module.css';
import { useDispatch, useSelector } from '../../utils/types/main';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/wsAction';
import { wsUrlAll } from '../../utils/constants';
import { TLocation } from '../../utils/types/data';

interface ParamsUserProps{
  id?: string;
}

const OrderPreRender: FC = () => {
  const orders = useSelector(store => store.wsOrders.data.orders);
  const ingredients = useSelector(store => store.ingredients.data);
  const location = useLocation<TLocation>();
  const params = useParams<ParamsUserProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart(wsUrlAll));
    return () => {
        dispatch(wsConnectionStop());
    };
}, [dispatch]);

  const order = orders?.find(item => params.id === item._id);

  if(location.state === undefined) {
    return (
      <>
        {(order && ingredients !== null &&
          <section className={styleOrderPreRender.wrapperPage} >
            <OrderInfo order={order} ingredients={ingredients} />
          </section>
        )}
      </>

    )
  }

  return (
    <>
      {(order !== undefined && order !== null && ingredients !== null &&
        <section className={styleOrderPreRender.wrapper} >
          <OrderInfo order={order} ingredients={ingredients} />
        </section>
      )}
    </>
  )
}

export default OrderPreRender