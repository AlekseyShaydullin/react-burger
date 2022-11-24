import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients';
import HomePage from '../../pages/HomePage/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <HomePage />
    </>
  );
}

export default App;
