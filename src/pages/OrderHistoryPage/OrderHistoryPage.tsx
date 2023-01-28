import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../utils/types/main';
import { Link, useLocation } from 'react-router-dom';
import NavProfile from '../../components/NavProfile/NavProfile';
import Order from '../../components/Order/Order';
import { WS_CONNECTION_START, WS_CONNECTION_STOP } from '../../services/actions/wsAction';
import styleOrderHistoryPage from './OrderHistoryPage.module.css';
import { TLocation } from '../../utils/types/data';

const OrderHistoryPage: FC = () => {
  const {orders} = useSelector(store => store.wsOrders.data);
  const dispatch = useDispatch();
  const location = useLocation<TLocation>();
  
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

  return (
    <>
      {(orders !== undefined &&
        <section className={styleOrderHistoryPage.wrapper}>
        <nav className={styleOrderHistoryPage.nav}>
          <NavProfile />
          <p className="text text_type_main-default text_color_inactive">
            В этом разделе вы можете просмотреть свою историю заказов
          </p>
        </nav>
        <ul className={styleOrderHistoryPage.orders}>
          {orders !== null && orders.map(order => {
            return (
              <Link className={styleOrderHistoryPage.link}
              to={{pathname: `/profile/orders/${`${order._id}`}`, state: {background: location}}}
              key={order._id}>
                <Order data={order} />
              </Link>
            )
          }).reverse()}
        </ul>
      </section>
      )}
    </>
  )
}

export default OrderHistoryPage