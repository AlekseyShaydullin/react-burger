import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styleApp from './App.module.css';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import ModalOrder from '../ModalOrder/ModalOrder';
import ModalIngredient from '../ModalIngredient/ModalIngredient';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styleApp.main__wrapper}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
      
      <ModalIngredient />
      <ModalOrder />
    </>
  );
}

export default App;
