import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import styleApp from './App.module.css';
import { apiUrl } from '../../utils/constants';


function App() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false);
  const [isOpenedOrderModal, setModalOrderState] = useState(false);

  const handleIngredientState = (data) => {
    setCurrentIngredient(data);
    setModalIngredientsState(set => !set)
  };

  const closeOrderModal = () => {
    setModalOrderState(false)
  };

  const handleOrderModal = () => {
    setModalOrderState(true)
  };

  const closeIngredientModal = () => {
    setModalIngredientsState(false)
  };

  useEffect(() => {
    const getData = () => {
      fetch(apiUrl)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res.status);
        })
        .then(res => setIngredients(res.data))
        .catch(err => console.error(err))
    }
    getData()
  }, [])

  return (
    <>
      <AppHeader />
      <main className={styleApp.main__wrapper}>
        <BurgerIngredients data={ingredients} openModal={handleIngredientState} />
        {ingredients.length > 0 && <BurgerConstructor data={ingredients} openModal={handleOrderModal} />}
      </main>

      <Modal activeModal={isOpenedIngredientsModal} title={"Детали ингредиента"} onClose={closeIngredientModal}>
        <IngredientDetails selectedElement={currentIngredient} />
      </Modal>
      <Modal activeModal={isOpenedOrderModal} onClose={closeOrderModal} >
        <OrderDetails />
      </Modal>
    </>
  );
}

export default App;
