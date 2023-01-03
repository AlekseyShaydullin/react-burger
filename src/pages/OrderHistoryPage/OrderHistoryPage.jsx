import React from 'react';
import { useSelector } from 'react-redux';
import NavProfile from '../../components/NavProfile/NavProfile';
import styleOrderHistoryPage from './OrderHistoryPage.module.css';

function OrderHistoryPage() {
  const ordersUser = useSelector(store => store.wsUserOrders.orders);
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