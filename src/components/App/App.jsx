import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients';
import HomePage from '../../pages/HomePage/HomePage';
import { BrowserRouter as Router,	Route, Switch } from "react-router-dom";
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route path='/register' exact>
            <RegisterPage />
          </Route>
          <Route path='/forgot-password' exact>
            <ForgotPassPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
