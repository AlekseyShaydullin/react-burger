import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { wsGetOrders } from '../../services/actions/wsAction';
import OrderCheckDay from '../OrderCheckDay/OrderCheckDay';
import OrderIngredientImg from '../OrderIngredientImg/OrderIngredientImg';
import OrderStatus from '../OrderStatus/OrderStatus';
import styleOrderInfo from './OrderInfo.module.css';

function OrderInfo() {
  const history = useHistory();
  const location = useLocation();
  const isLoading = useSelector(store => store.wsOrders.wsConnected)
  const params = useParams();
  const orders = useSelector(store => store.wsOrders.orders);
  const dispatch = useDispatch();
  // const orders = props.orders;
  const ingredients = useSelector(store => store.ingredients.data);

  const sortOrders = []

  console.log(orders); //Прилетает пустой массив

  useEffect(() => {
    console.log(isLoading);
    if(isLoading !== true){
      
      dispatch(wsGetOrders())
    }
  })

  const order = useMemo(() => orders.find(item => params.id === item._id), [orders, params.id]);

  console.log(order); //undefined

  console.log(ingredients);

  const orderIngredients = useMemo(() => 
    order?.ingredients.filter(id => id !== null).map(id => ingredients !== undefined && 
      ingredients.find(item => id === item._id)
    ), [ingredients, order.ingredients]);

  const priceScore = useMemo(() => {
    return orderIngredients.reduce((acc, ing) => acc + ing.price, 0)
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
      <OrderStatus order={order} />
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
        <OrderCheckDay order={order} />
        <div className={styleOrderInfo.totalPrice}>
          <p className={`text text_type_digits-default`}>{priceScore}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}

export default OrderInfo;