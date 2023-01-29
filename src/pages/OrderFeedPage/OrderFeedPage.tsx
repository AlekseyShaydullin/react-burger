import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../utils/types/main';
import { Link, useLocation } from 'react-router-dom';
import Order from '../../components/Order/Order';
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/wsAction';
import styleOrderFeedPage from './OrderFeedPage.module.css';
import { wsUrlAll } from '../../utils/constants';

const OrderFeedPage: FC = () => {
  const orders = useSelector(store => store.wsOrders.data.orders);
  const ordersData = useSelector(store => store.wsOrders.data);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart(wsUrlAll));
    return () => {
        dispatch(wsConnectionStop());
    };
  }, [dispatch]);

  const completedOrders = orders !== null && orders.filter(order => order.status === 'done')

  const uncompletedOrders = orders !== null && orders.filter(order => order.status !== 'done')

  return (
    <>{(orders !== undefined &&
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
              {completedOrders !== false && completedOrders.map(order => {
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
            {uncompletedOrders !== false && uncompletedOrders.map(order => {
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
    )}
      
    </>
  )
}

export default OrderFeedPage;