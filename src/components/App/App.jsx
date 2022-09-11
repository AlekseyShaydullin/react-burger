import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import { data } from '../../utils/data';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styleApp from './App.module.css'
import { ingredientType } from '../../utils/types';

function App() {
  return (
    <>
      <AppHeader />
      <main className={styleApp.main__wrapper}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

App.propTypes = {
  data: ingredientType.isRequired
}

export default App;
