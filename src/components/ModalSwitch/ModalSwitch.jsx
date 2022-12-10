import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ModalIngredient from '../ModalIngredient/ModalIngredient';
import { BrowserRouter as Router,	Route, Switch, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function ModalSwitch() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return(
    <>
      <AppHeader />
        <Router>
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
          </Switch>
          {background && (
            <Route path='/ingredients/:id'>
              <ModalIngredient />
            </Route>
          )}
        </Router>
    </>
  )
}

export default ModalSwitch