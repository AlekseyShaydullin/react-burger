import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/getIngredients';
import { getCookie } from '../../utils/cookie';
import { getUser, refreshToken } from '../../services/actions/usersAction';
import ModalSwitch from '../ModalSwitch/ModalSwitch';
import { wsConnectionClosed, wsConnectionOpen, wsUserConnectionClosed, wsUserConnectionOpen } from '../../services/actions/wsAction';

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
    } else if(cookie && token) {
      dispatch(getUser());
    }
  }, [cookie, dispatch, token])

  useEffect(() => {
    dispatch(wsConnectionOpen());
    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(wsUserConnectionOpen());
    return () => {
      dispatch(wsUserConnectionClosed());
    }
  }, [dispatch])

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
