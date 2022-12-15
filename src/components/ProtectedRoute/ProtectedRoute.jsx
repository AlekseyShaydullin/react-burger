import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ onlyForAuth, children, ...rest }) => {
    const isAuthorized = getCookie('token');
    const location = useLocation();

    if (!onlyForAuth && isAuthorized) {
        const { from } = location.state || { from: { pathname: "/" } };
        return (
            <Route {...rest}>
                <Redirect to={from} />
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

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    onlyForAuth: PropTypes.bool.isRequired,
};