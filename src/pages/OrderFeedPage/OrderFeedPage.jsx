import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Order from '../../components/Order/Order';
import styleOrderFeedPage from './OrderFeedPage.module.css';

function OrderFeedPage() {

  const orders = useSelector(state => state.wsOrders.orders);
  console.log(orders)


  return (
    <main className={styleOrderFeedPage.main__wrapper}>
      <section className={`${styleOrderFeedPage.feed} mt-10`}>
        <h1 className={'text text_type_main-large mb-5'}>Лента заказов</h1>
        <ul className={styleOrderFeedPage.orders}>
          <Order />
        </ul>
      </section>
      <section className={styleOrderFeedPage.statistics}>
        <div className={styleOrderFeedPage.ordersNumber}>
          <div className={styleOrderFeedPage.ordersWrapper}>
            <h2 className={styleOrderFeedPage.title}>Готовы:</h2>
            <ul className={styleOrderFeedPage.list}>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}>034533</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}>034538</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}>034533</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}>034538</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}>034533</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}>034538</li>
            </ul>
          </div>
          <div className={styleOrderFeedPage.ordersWrapper}>
            <h2 className={styleOrderFeedPage.title}>В работе:</h2>
            <ul className={styleOrderFeedPage.list}>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item}`}>034538</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item}`}>034538</li>
              <li className={`text text_type_digits-default ${styleOrderFeedPage.item}`}>034538</li>
            </ul>
          </div>
        </div>
        <div className={styleOrderFeedPage.allStatistics}>
          <h2 className={styleOrderFeedPage.title}>Выполнено за все время:</h2>
          <p className={`text text_type_digits-large ${styleOrderFeedPage.text}`}>28 752</p>
        </div>
        <div className={styleOrderFeedPage.allStatistics}>
          <h2 className={styleOrderFeedPage.title}>Выполнено за сегодня:</h2>
          <p className={`text text_type_digits-large ${styleOrderFeedPage.text}`}>138</p>
        </div>
      </section>
    </main>
  )
}

export default OrderFeedPage;