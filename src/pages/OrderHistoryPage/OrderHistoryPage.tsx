import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../utils/types/main';
import { Link, useLocation } from 'react-router-dom';
import NavProfile from '../../components/NavProfile/NavProfile';
import Order from '../../components/Order/Order';
import { wsAuthConnectionStart, wsConnectionStop } from '../../services/actions/wsAction';
import styleOrderHistoryPage from './OrderHistoryPage.module.css';
import { TLocation } from '../../utils/types/data';
import { wsUrl } from '../../utils/constants';

const OrderHistoryPage: FC = () => {
  const {orders} = useSelector(store => store.wsOrders.data);
  const dispatch = useDispatch();
  const location = useLocation<TLocation>();

  useEffect(() => {
    dispatch(wsAuthConnectionStart(wsUrl));
    return () => {
        dispatch(wsConnectionStop());
    };
}, [dispatch]);

  return (
    <>
      {(orders !== undefined && orders !== null &&
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