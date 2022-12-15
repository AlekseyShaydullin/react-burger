import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../services/actions/usersAction';
import styleNavProfile from './NavProfile.module.css';

function NavProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = useCallback(() => {
    dispatch(logout());
    history.replace({ pathname: '/login' })
  }, [dispatch, history])

  return (
    <>
      <ul className={styleNavProfile.list}>
        <li className={styleNavProfile.item}>
          <NavLink
            to={{ pathname: '/profile' }} 
            className={`${styleNavProfile.link} text text_type_main-medium text_color_inactive`}
            activeClassName={styleNavProfile.active_link}>
              Профиль
          </NavLink>
        </li>
        <li className={styleNavProfile.item}>
          <NavLink 
            to={{ pathname: '/profile/order' }} 
            className={`${styleNavProfile.link} text text_type_main-medium text_color_inactive`}
            activeClassName={styleNavProfile.active_link}>
              История заказов
          </NavLink>
        </li>
        <li className={styleNavProfile.item}>
          <NavLink 
            to={{ pathname: '/login' }} 
            className={`${styleNavProfile.link} text text_type_main-medium text_color_inactive`}
            activeClassName={styleNavProfile.active_link}
            onClick={logoutUser}
          >
            Выход
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavProfile