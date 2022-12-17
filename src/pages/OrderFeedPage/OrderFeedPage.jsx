import React from 'react';
import Order from '../../components/Order/Order';
import styleOrderFeedPage from './OrderFeedPage.module.css';

function OrderFeedPage() {
  return (
    <main className={styleOrderFeedPage.main__wrapper}>
      <section className={`${styleOrderFeedPage.feed} mt-10`}>
        <h1 className={'text text_type_main-large mb-5'}>Лента заказов</h1>
        <ul className={styleOrderFeedPage.orders}>
          <Order />
        </ul>
      </section>
      <section className={styleOrderFeedPage.statistics}></section>
    </main>
  )
}

export default OrderFeedPage;