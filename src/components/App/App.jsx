import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import styleApp from './App.module.css';
import { ingredientType } from '../../utils/types';
import { apiUrl } from "../../utils/constants";


function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({})
  const [isOpenedIngredientsModal, setModalIngredientsState] = useState(false)
  const [isOpenedOrderModal, setModalOrderState] = useState(false)

  const handleOrderState = () => {
    setModalOrderState(!isOpenedOrderModal)
  };
  const handleIngredientState = (i) => {
    setCurrentIngredient(i);
    setModalIngredientsState(t => !t)
  };
  const closeOrderModal = () => {
    setModalOrderState(false)
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
        {ingredients.length &&
          <>
            <BurgerIngredients data={ingredients} openModal={handleIngredientState} />
            <BurgerConstructor data={ingredients} openModal={handleOrderState} />
          </>
        }
      </main>
      <Modal activeModal={isOpenedIngredientsModal} title={"Детали ингредиента"} closeModal={closeIngredientModal}>
        <IngredientDetails selectedElement={currentIngredient} />
      </Modal>
      <Modal activeModal={isOpenedOrderModal} closeModal={closeOrderModal} >
        <OrderDetails />
      </Modal>
    </>
  );
}

App.propTypes = {
  data: ingredientType.isRequired
}

export default App;
