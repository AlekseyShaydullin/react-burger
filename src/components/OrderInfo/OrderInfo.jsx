import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import OrderCheckDay from '../OrderCheckDay/OrderCheckDay';
import OrderIngredientImg from '../OrderIngredientImg/OrderIngredientImg';
import OrderStatus from '../OrderStatus/OrderStatus';
import styleOrderInfo from './OrderInfo.module.css';
import PropTypes from "prop-types";

function OrderInfo(props) {
  const history = useHistory();
  const location = useLocation();

  console.log(history);
  console.log(location);

  const sortOrders = []

  const orderIngredients = useMemo(() => 
    props.order.ingredients.filter(id => id !== null).map(id => props.ingredients !== undefined && 
      props.ingredients.find(item => id === item._id)
    ), [props.ingredients, props.order.ingredients]);

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

  return (props.order !== undefined && 
    <>
      <p className={`text text_type_digits-default ${styleOrderInfo.orderNumber}`}>{`#${props.order.number}`}</p>
      <h1 className={`text text_type_main-medium ${styleOrderInfo.title} mt-10`}>{props.order.name}</h1>
      <OrderStatus order={props.order} />
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
        <OrderCheckDay order={props.order} />
        <div className={styleOrderInfo.totalPrice}>
          <p className={`text text_type_digits-default`}>{priceScore}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  )
}

OrderInfo.propTypes = {
  order: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired
};

export default OrderInfo;