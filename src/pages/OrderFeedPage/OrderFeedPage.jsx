import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Order from '../../components/Order/Order';
import { WS_CONNECTION_START, WS_CONNECTION_STOP } from '../../services/actions/wsAction';
import styleOrderFeedPage from './OrderFeedPage.module.css';

function OrderFeedPage() {
  const orders = useSelector(store => store.wsOrders.orders);
  const ordersData = useSelector(store => store.wsOrders);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
        type: WS_CONNECTION_START,
        payload: {
            url: "wss://norma.nomoreparties.space/orders/all",
            isAuth: false,
        },
    });
    return () => {
        dispatch({
            type: WS_CONNECTION_STOP,
        });
    };
}, [dispatch]);

  const completedOrders = orders
    .filter(order => order.status === 'done')
    .filter((order, index) => index < 10);

  const uncompletedOrders = orders
    .filter(order => order.status !== 'done')
    .filter((order, index) => index < 10);

  return (orders !== undefined &&
    <>
    <main className={styleOrderFeedPage.main__wrapper}>
      <section className={`${styleOrderFeedPage.feed} mt-10`}>
        <h1 className={'text text_type_main-large mb-5'}>Лента заказов</h1>
        <ul className={styleOrderFeedPage.orders}>
          {orders?.map(order => {
            return (
              <Link 
                className={styleOrderFeedPage.link} 
                to={{pathname: `/feed/${order._id}`, state: {background: location}}}
                key={order._id}>
                  <Order data={order} />
              </Link>
            )
            })}
        </ul>
      </section>
      <section className={styleOrderFeedPage.statistics}>
        <div className={styleOrderFeedPage.ordersNumber}>
          <div className={styleOrderFeedPage.ordersWrapper}>
            <h2 className={styleOrderFeedPage.title}>Готовы:</h2>
            <ul className={styleOrderFeedPage.list}>
              {completedOrders.map(order => {
                return (
                  <li className={`text text_type_digits-default 
                  ${styleOrderFeedPage.item} ${styleOrderFeedPage.item_job}`}
                  key={order._id}
                  >{order.number}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styleOrderFeedPage.ordersWrapper}>
            <h2 className={styleOrderFeedPage.title}>В работе:</h2>
            <ul className={styleOrderFeedPage.list}>
            {uncompletedOrders.map(order => {
                return (
                  <li className={`text text_type_digits-default 
                  ${styleOrderFeedPage.item}`}
                  key={order._id}
                  >{order.number}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={styleOrderFeedPage.allStatistics}>
          <h2 className={styleOrderFeedPage.title}>Выполнено за все время:</h2>
          <p className={`text text_type_digits-large ${styleOrderFeedPage.text}`}>{ordersData.total}</p>
        </div>
        <div className={styleOrderFeedPage.allStatistics}>
          <h2 className={styleOrderFeedPage.title}>Выполнено за сегодня:</h2>
          <p className={`text text_type_digits-large ${styleOrderFeedPage.text}`}>{ordersData.totalToday}</p>
        </div>
      </section>
    </main>
    </>
  )
}

export default OrderFeedPage;