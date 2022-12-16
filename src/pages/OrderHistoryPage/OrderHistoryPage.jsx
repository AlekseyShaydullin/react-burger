import React from 'react';
import NavProfile from '../../components/NavProfile/NavProfile';
import styleOrderHistoryPage from './OrderHistoryPage.module.css';

function OrderHistoryPage() {
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