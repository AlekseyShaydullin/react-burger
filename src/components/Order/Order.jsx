import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import OrderIngredientImg from '../OrderIngredientImg/OrderIngredientImg';
import styleOrder from './Order.module.css'

function Order(props) {
  const { number, createdAt, name, status } = props.data;
  const ingredients = useSelector(store => store.ingredients.data)

  const currentDay = new Date().getDate();
  const dayOfOrder = createdAt.slice(8,10);

  const orderLength = props.data.ingredients.length;
  const disabledIngredientsCount = orderLength - 5;

  const checkDay = () => {
    if(dayOfOrder == currentDay) {
      return 'Сегодня'
    }
  }

  const orderIngredients = useMemo(() => 
    props.data.ingredients.filter(id => id !== null).map(id => 
      ingredients.find(item => id === item._id)
    ), [ingredients, props.data.ingredients]);

  const priceScore = useMemo(() => {
    return orderIngredients.reduce((acc, item) => 
      item.type === 'bun' ? acc + item.price * 2 : acc + (item ? item.price : 0), 0)
  }, [orderIngredients])

  return (
    <li className={`${styleOrder.wrapper} mr-2`}>
      <div className={styleOrder.info}>
        <p className={`text text_type_digits-default ${styleOrder.title}`}>{`#${number}`}</p>
        <p className={`text text_type_main-default text_color_inactive`}>
          {checkDay ? 'Сегодня' : 'Вчера'}, {createdAt.slice(11,16)} {`i-GMT+3`}</p>
      </div>
      <h2 className={`text text_type_main-medium ${styleOrder.title}`}>{name}</h2>
      <p className={`text text_type_main-default ${styleOrder.status}`}>{
        status === 'done' ? 'Выполнен' : 
        status === 'pending' ? 'Готовится' :
        status === 'created' ? 'Создан' : '' 
        }
      </p>
      <div className={styleOrder.details}>
        <ul className={styleOrder.ingredientsList}>
          {orderIngredients && orderLength < 6 && orderIngredients.map((ing, index)=> {
            return(
              <li className={styleOrder.list} key={index}>
                {ing && <OrderIngredientImg img={ing.image} alt={ing.name} key={ing._id} />}
              </li>
            )
          })}
          {orderIngredients && orderLength >= 6 && orderIngredients.slice(0,5).map((ing, index) => {
            return(
              <li className={styleOrder.list} key={index}>
                {ing && <OrderIngredientImg img={ing.image} alt={ing.name} key={ing._id} />}
              </li>
            )
          })}
          {orderIngredients && orderLength > 6 && orderIngredients.slice(5,6).map((ing, index) => {
            return( 
              <>
                <li className={styleOrder.list} key={index}>
                  <p className={`text text_type_main-default ${styleOrder.disabledCount}`}>{`+${disabledIngredientsCount}`}</p>
                  <div className={styleOrder.disabledImg}>
                    {ing && <OrderIngredientImg img={ing.image} alt={ing.name} key={ing._id} />}
                  </div>
                </li>
              </>
            )
          })}
        </ul>
        <div className={styleOrder.price}>
          <p className={`text text_type_digits-default ${styleOrder.title}`}>{priceScore}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
}

export default Order;