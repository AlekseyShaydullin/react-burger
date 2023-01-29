import React, { FC, useCallback, useMemo } from 'react'
import styleBurgerConstruct from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../utils/types/main';
import { useDrop } from 'react-dnd';
import {sortedIngredients, setBurgerBun, addBurgerIngredient} from '../../services/actions/currentBurger';
import ConstructorBurgerItem from '../ConstructorBurgerItem/ConstructorBurgerItem';
import { setOrder } from '../../services/actions/setOrder';
import { useHistory } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { TIngredientKey } from '../../utils/types/data';

const BurgerConstructor: FC = () => {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients);
  const order = useSelector(store => store.order)
  const dispatch = useDispatch();
  const history = useHistory();

  const [{isOver}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item: TIngredientKey) {
      if (item.type === 'bun') {dispatch(setBurgerBun(item))}
      else {dispatch(addBurgerIngredient(item))}
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  })
  
  const price = useMemo(() => {
    return ingredients.reduce((acc: number, item: TIngredientKey) => acc + item.price, 0)
  }, [ingredients]);
  
  const moveIngredient = useCallback((dragIndex: number, hoverIndex: number) => {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    const newIngredients = [...ingredients];
    newIngredients[dragIndex] = hoverItem;
    newIngredients[hoverIndex] = dragItem;
    dispatch(sortedIngredients(newIngredients));
  }, [dispatch, ingredients])

  const renderIngredients = (ingredients: TIngredientKey, index: number) => {
    return (
      <ConstructorBurgerItem ing={ingredients} index={index} key={ingredients.keyId} moveIng={moveIngredient}/>
    )
  }

  const handleOrderModal = () => {
    const refreshToken = localStorage.getItem('refreshToken');
		const accessToken = getCookie('accessToken');

    if(ingredients !== null && bun !== null && refreshToken && accessToken) {
      dispatch(setOrder([bun._id, ...ingredients.map(ing => ing._id), bun._id]));
    } else {
      history.push('/login');
    }
    
  };

  return (
    <section ref={dropRef} className={isOver ? `${styleBurgerConstruct.wrapper} ${styleBurgerConstruct.border_color}` : `${styleBurgerConstruct.wrapper}`}>
      <article className={`${styleBurgerConstruct.item__bun} pr-4`}>
      {bun ?
            <div className={`${styleBurgerConstruct.item_bun} pr-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
          : 
          <div className={`${styleBurgerConstruct.drop}`}>
            <h2 className={`${styleBurgerConstruct.title}`}>Добавьте булку</h2>
          </div>
          }
          {ingredients.length > 0 ?
          <ul className={styleBurgerConstruct.filling}>
            {ingredients.map(renderIngredients)}
          </ul>
          :
          <>
            <div className={`${styleBurgerConstruct.drop}`}>
              <h2 className={`${styleBurgerConstruct.title}`}>Добавьте начинку</h2>
            </div>
          </>
          }
        
          {bun ?
          <div className={`${styleBurgerConstruct.item_bun} pr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
            : 
          <div className={`${styleBurgerConstruct.drop}`}>
            <h2 className={`${styleBurgerConstruct.title}`}>Добавьте булку</h2>
          </div>
          }
          <div className={`${styleBurgerConstruct.order} mt-10`}>
            <div className={styleBurgerConstruct.price}>
              <p className="text text_type_digits-medium">{bun ? price + (bun.price * 2) : price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large" htmlType={'button'} onClick={handleOrderModal}>
              {order.orderRequest === true ? 'Оформление...' :'Оформить заказ'}
            </Button>
          </div>
      </article>
    </section>
  )
}

export default BurgerConstructor;