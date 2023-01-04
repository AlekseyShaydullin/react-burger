import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderHistoryPage from '../../pages/OrderHistoryPage/OrderHistoryPage';
import OrderFeedPage from '../../pages/OrderFeedPage/OrderFeedPage';
import ModalOrderInfo from '../ModalOrderInfo/ModalOrderInfo';
import OrderPreRender from '../OrderPreRender/OrderPreRender';
import OrderAuthPreRender from '../OrderAuthPreRender/OrderAuthPreRender';

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
        <ProtectedRoute path='/login' onlyForAuth={false} exact>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path='/register' onlyForAuth={false} exact>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute path='/forgot-password' onlyForAuth={false} exact>
          <ForgotPassPage />
        </ProtectedRoute>
        <ProtectedRoute path='/reset-password' onlyForAuth={false} exact>
          <ResetPassPage />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' onlyForAuth exact>
          <ProfilePage />
        </ProtectedRoute>
        <Route path='/ingredients/:id' exact>
          <IngredientDetails />
        </Route>
        <ProtectedRoute path='/profile/orders' onlyForAuth exact>
          <OrderHistoryPage />
        </ProtectedRoute>
        <Route path='/feed' exact>
          <OrderFeedPage />
        </Route>
        <Route path='/feed/:id' exact>
          <OrderPreRender />
        </Route>
        <Route path='/profile/orders/:id' exact>
          <OrderAuthPreRender />
        </Route>
      </Switch>
      {background && (
        <Route path='/ingredients/:id'>
          <IngredientDetails />
        </Route>
      )}
      {background && (
        <Route path='/feed/:id'>
          <ModalOrderInfo />
        </Route>
      )}
      {background && (
        <Route path='/profile/orders/:id'>
          <ModalOrderInfo />
        </Route>
      )}
    </>
  )
}

export default ModalSwitch;