import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styleApp from './App.module.css'

function App({ data }) {
  return (
    <>
      <AppHeader />
      <main className={styleApp.mainWrapper}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
