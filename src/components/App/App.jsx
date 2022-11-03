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
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);
  const [isOpenedOrderModal, setModalOrderState] = useState(false);
  const [orderState, setOrderState] = useState(0);

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

//console.log(ingredients)

  return (
    <>
      <AppHeader />
      <main className={styleApp.main__wrapper}>
        <IngredientsContext.Provider value={{ingredients}}>
          {ingredients.length > 0 && (
            <>
              <BurgerIngredients openModal={handleIngredientState} />
              <BurgerConstructor openModal={handleOrderModal} />
            </>
          )}
        </IngredientsContext.Provider>
      </main>

      <Modal activeModal={isOpenedIngredientsModal} title={"Детали ингредиента"} onClose={closeIngredientModal}>
        <IngredientDetails selectedElement={currentIngredient} />
      </Modal>
      <Modal activeModal={isOpenedOrderModal} onClose={closeOrderModal} >
        <OrderDetails order={orderState} />
      </Modal>
    </>
  );
}

export default App;
