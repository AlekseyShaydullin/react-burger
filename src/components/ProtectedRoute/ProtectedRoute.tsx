import React, { FC, ReactNode } from 'react';
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import {useLocation} from "react-router-dom";

type TProtectedRoute = {
  onlyForAuth: boolean;
  children: ReactNode;
}

export const ProtectedRoute: FC<TProtectedRoute> = ({ onlyForAuth, children, ...rest }) => {
  const isAuthorized = getCookie('accessToken');
  const location = useLocation();

  if (!onlyForAuth && isAuthorized) {
    const { from }: {from?: {pathname: string}} = location.state || { from: { pathname: "/" } };

    return (
      <Route {...rest}>
        <Redirect to={from!} />
      </Route>
    );
  }

  if (onlyForAuth && !isAuthorized) {

    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
};
