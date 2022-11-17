import React, { useCallback, useMemo } from 'react'
import styleBurgerConstruct from './BurgerConstructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import {sortedIngredients, setBurgerBun, addBurgerIngredient} from '../../services/actions/currentBurger';
import ConstructorBurgerItem from '../ConstructorBurgerItem/ConstructorBurgerItem';
import { setOrder } from '../../services/actions/setOrder';

function BurgerConstructor() {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients);
  const dispatch = useDispatch();

  const [{isOver}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if (item.type === 'bun') {dispatch(setBurgerBun(item))}
      else {dispatch(addBurgerIngredient(item))}
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  })
  
  const price = useMemo(() => {
    return ingredients.reduce((acc, item) => acc + item.price, 0)
  }, [ingredients]);
  
  const moveIngredient = useCallback((dragIndex, hoverIndex) => {
    const dragItem = ingredients[dragIndex];
    const hoverItem = ingredients[hoverIndex];
    const newIngredients = [...ingredients];
    newIngredients[dragIndex] = hoverItem;
    newIngredients[hoverIndex] = dragItem;
    dispatch(sortedIngredients(newIngredients));
  }, [dispatch, ingredients])

  const renderIngredients = (ing, index) => {
    return (
      <ConstructorBurgerItem ing={ing} index={index} key={ing.keyId} moveIng={moveIngredient}/>
    )
  }

  const handleOrderModal = () => {
    if(ingredients !== null && bun !== null) {
      dispatch(setOrder([bun._id, ...ingredients.map(ing => ing._id), bun._id]));
    }
    
  };

  return (
    <>
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
              <Button type="primary" size="large" onClick={handleOrderModal}>
                Оформить заказ
              </Button>
            </div>
        </article>
      </section>
    </>
  )
}

export default BurgerConstructor;