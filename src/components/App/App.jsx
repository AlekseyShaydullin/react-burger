import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/cookie';
import { getUser, refreshToken } from '../../services/actions/usersAction';
import ModalSwitch from '../ModalSwitch/ModalSwitch';
import { getIngredients } from '../../services/actions/getIngredients';

function App() {
  const dispatch = useDispatch();
  const cookie = getCookie('accessToken');
  const token = localStorage.getItem('refreshToken')

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  useEffect(() => {
    if(!cookie && token) {
      dispatch(refreshToken());
    } else {
      dispatch(getUser());
    }
  }, [cookie, dispatch, token])

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
