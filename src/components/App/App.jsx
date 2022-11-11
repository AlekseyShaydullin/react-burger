import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import styleApp from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients';
import { setOrder } from '../../services/actions/setOrder';
import { deleteIngredientDetails } from '../../services/actions/showIngredientDetails';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients)
  const activeModalIngredient = useSelector(store => store.ingredientDetail.active);
  const [isOpenedOrderModal, setModalOrderState] = useState(false);
  const dispatch = useDispatch();

  const closeIngredientModal = () => {
    dispatch(deleteIngredientDetails())
  };

  const handleOrderModal = () => {
    setModalOrderState(true);
    dispatch(setOrder([bun._id, ...ingredients.map(ing => ing._id), bun._id]));
  };

  const closeOrderModal = () => {
    setModalOrderState(false)
  };

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styleApp.main__wrapper}>
          <BurgerIngredients />
          <BurgerConstructor openModal={handleOrderModal} />
        </main>
      </DndProvider>
      
      <Modal title={'Детали ингредиента'} onClose={closeIngredientModal} visible={activeModalIngredient}>
        <IngredientDetails />
      </Modal>
      <Modal onClose={closeOrderModal} visible={isOpenedOrderModal}>
        <OrderDetails />
      </Modal>
    </>
  );
}

export default App;
