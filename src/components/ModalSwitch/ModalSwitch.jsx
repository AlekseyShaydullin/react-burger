import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import { Route, Switch, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function ModalSwitch() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return(
    <>
      <AppHeader />
      <Switch location={background || location}>
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
        <Route path='/reset-password' exact>
          <ResetPassPage />
        </Route>
        <ProtectedRoute path='/profile' exact>
          <ProfilePage />
        </ProtectedRoute>
        <Route path='/ingredients/:id' exact>
          <IngredientDetails />
        </Route>
      </Switch>
      {background && (
        <Route path='/ingredients/:id'>
          <IngredientDetails />
        </Route>
      )}
    </>
  )
}

export default ModalSwitch;