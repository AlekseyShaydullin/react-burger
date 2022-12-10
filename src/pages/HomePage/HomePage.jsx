import React from 'react';
import styleHomePage from './HomePage.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import ModalOrder from '../../components/ModalOrder/ModalOrder';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';

function HomePage() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <main className={styleHomePage.main__wrapper}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
      <ModalOrder />
    </>
  );
}

export default HomePage;