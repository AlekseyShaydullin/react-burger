import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import OrderIngredientImg from '../OrderIngredientImg/OrderIngredientImg';
import styleOrderInfo from './OrderInfo.module.css';

function OrderInfo() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const orders = useSelector(store => store.wsOrders.orders);
  const ingredients = useSelector(store => store.ingredients.data);

  const sortOrders = []

  const order = useMemo(() => orders?.find(item => params.id === item._id), [orders, params.id])

  const status = order !== undefined && order.status === 'done' ? 
    { text: 'Выполнен', color: 'var(--colors-interface-success)' } : 
    order === 'pending' ? 
    { text: 'Готовится', color: 'var(--colors-interface-accent)' } : 
    { text: 'Отменен', color: 'var(--colors-interface-error)' };

  const orderIngredients = useMemo(() => 
    order.ingredients.filter(id => id !== null).map(id => ingredients !== undefined && 
      ingredients.find(item => id === item._id)
    ), [ingredients, order.ingredients]);
  
  const currentDay = new Date().getDate();
  const dayOfOrder = order.createdAt.slice(8,10);
  
  const checkDay = () => {
    if(dayOfOrder == currentDay) {
      return 'Сегодня'
    }
  }

  const priceScore = useMemo(() => {
    return orderIngredients.reduce((acc, item) => 
      item.type === 'bun' ? acc + item.price * 2 : acc + (item ? item.price : 0), 0)
  }, [orderIngredients])

  orderIngredients.map(ing => {
    const isLocated = sortOrders?.filter(el => el.item._id === ing._id).length !== 0 ? true : false;

    if(!isLocated) {
      sortOrders.push({
        item: ing,
        count: orderIngredients.filter(item => item._id === ing._id).length
      })
    }
  })

  return (order !== undefined && 
    <section className={styleOrderInfo.wrapper}>
      <p className={`text text_type_digits-default ${styleOrderInfo.orderNumber}`}>{`#${order.number}`}</p>
      <h1 className={`text text_type_main-medium ${styleOrderInfo.title} mt-10`}>{order.name}</h1>
      <p className={`text text_type_main-default mt-3`} style={{ color: status.color }}>{status.text}</p>
      <p className={`text text_type_main-medium ${styleOrderInfo.title} mt-15`}>Состав:</p>
      <ul className={styleOrderInfo.ingredients}>
        {sortOrders.map(({item, count}) => {
          return(
            <li className={styleOrderInfo.ingredient} key={item._id}>
              <OrderIngredientImg img={item.image} alt={item.name}/>
              <p className={`text text_type_main-default ${styleOrderInfo.name}`}>{item.name}</p>
              <div className={styleOrderInfo.price}>
                <p className={`text text_type_digits-default`}>{`${count} х ${item.price}`}</p>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          )
        })}

      </ul>
      <div className={styleOrderInfo.footer}>
        <p className={`text text_type_main-default text_color_inactive`}>
          {checkDay ? 'Сегодня' : 'Вчера'}, {order.createdAt.slice(11,16)} {`i-GMT+3`}
        </p>
        <div className={styleOrderInfo.totalPrice}>
          <p className={`text text_type_digits-default`}>{priceScore}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

export default OrderInfo