import React, { FC, useEffect } from 'react';
import styleOrderAuthPreRender from './OrderAuthPreRender.module.css';
import { useDispatch, useSelector } from '../../utils/types/main';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../OrderInfo/OrderInfo'
import { wsAuthConnectionStart, wsConnectionStop } from '../../services/actions/wsAction';
import { wsUrl } from '../../utils/constants';
import { TLocation } from '../../utils/types/data';

interface ParamsUserProps{
  id?: string;
}

const OrderAuthPreRender: FC = () => {
  const orders = useSelector(store => store.wsOrders.data.orders);
  const ingredients = useSelector(store => store.ingredients.data);
  const location = useLocation<TLocation>();
  const params = useParams<ParamsUserProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsAuthConnectionStart(wsUrl));
    return () => {
        dispatch(wsConnectionStop());
    };
}, [dispatch]);

  const order = orders?.find(item => params.id === item._id);

  if(location.state === undefined) {
    return (
      <>
        {(order !== undefined && order !== null && ingredients !== null &&
          <section className={styleOrderAuthPreRender.wrapperPage} >
            <OrderInfo order={order} ingredients={ingredients} />
          </section>
        )}
      </>
    )
  }

  return (
    <>
      {(order !== undefined && order !== null && ingredients !== null &&
        <section className={styleOrderAuthPreRender.wrapper} >
          <OrderInfo order={order} ingredients={ingredients} />
        </section>
      )}
    </>
  )
}

export default OrderAuthPreRender