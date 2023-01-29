import React, { FC } from 'react';
import { TOrder } from '../../utils/types/data';

type TOrderCheckDayProps = {
  order: TOrder;
}

const OrderCheckDay: FC<TOrderCheckDayProps> = (props) => {
  const order = props.order

  const currentDay = new Date().getDate();
  const dayOfOrder = order.createdAt.slice(8,10);

  const checkDay = () => {
    if(Number(dayOfOrder) === currentDay) {
      return true
    }
    return false
  }

  return (
    <p className={`text text_type_main-default text_color_inactive`}>
      {checkDay() ? 'Сегодня' : 'Вчера'}, {order.createdAt.slice(11,16)} {`i-GMT+3`}
    </p>
  )
}

export default OrderCheckDay