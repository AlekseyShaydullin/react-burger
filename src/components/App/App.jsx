import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import styleApp from './App.module.css';
import { getData, setOrder } from '../../utils/api';
import { IngredientsContext } from '../../services/ingredientsContext';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);
  const [isOpenedOrderModal, setModalOrderState] = useState(false);
  const [orderState, setOrderState] = useState(null);

  const handleIngredientState = (data) => {
    setCurrentIngredient(data);
    setModalIngredientsState(set => !set)
  };

  const closeOrderModal = () => {
    setModalOrderState(false)
  };

  const handleOrderModal = () => {
    setModalOrderState(true)
    setOrder(ingredients.map(ing => ing._id))
      .then(res => setOrderState(res.order.number))
      .catch(err => console.error(err))
  };

  const closeIngredientModal = () => {
    setModalIngredientsState(false)
  };

  useEffect(() => {
    getData()
      .then(res => setIngredients(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <AppHeader />
      <main className={styleApp.main__wrapper}>
        {ingredients.length > 0 && (
          <IngredientsContext.Provider value={{ingredients}}>
            <BurgerIngredients openModal={handleIngredientState} />
            <BurgerConstructor openModal={handleOrderModal} />
          </IngredientsContext.Provider>
        )}
      </main>

      {currentIngredient !== null  && (
        <Modal title={"Детали ингредиента"} onClose={closeIngredientModal}>
          <IngredientDetails selectedElement={currentIngredient} />
        </Modal>
      )}

      {isOpenedOrderModal && (
        <Modal onClose={closeOrderModal} >
          <OrderDetails order={orderState} />
        </Modal>
      )}

    </>
  );
}

export default App;
