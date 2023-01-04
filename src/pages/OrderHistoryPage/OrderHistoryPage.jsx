import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavProfile from '../../components/NavProfile/NavProfile';
import { wsConnectionClosed, wsConnectionOpen } from '../../services/actions/wsAction';
import styleOrderHistoryPage from './OrderHistoryPage.module.css';

function OrderHistoryPage() {
  const ordersUser = useSelector(store => store.wsOrders);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(wsConnectionOpen());
    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [dispatch])

  console.log(ordersUser);

  return (
    <section className={styleOrderHistoryPage.wrapper}>
      <nav className={styleOrderHistoryPage.nav}>
        <NavProfile />
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </nav>

    </section>
  )
}

export default OrderHistoryPage