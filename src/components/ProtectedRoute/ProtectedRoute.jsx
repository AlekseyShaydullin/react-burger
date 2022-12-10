import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom';
import { getUser } from '../../services/actions/usersAction';

function ProtectedRoute({children, ...rest}) {
  const { user } = useSelector(store => store.userInfo);
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = () => {
    getUser();
    setUserLoaded(true);
  }

  useEffect(() => {
    init()
  }, [])

  if(!isUserLoaded) {
    return null;
  }

  return (
    <Route { ...rest } render={ ({ location }) =>
        user.name ? (children) : (<Redirect to={ { pathname: '/login', state: { from: location } } } />)
      }
    />)
}

export default ProtectedRoute;