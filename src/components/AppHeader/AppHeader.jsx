import React, { useState } from 'react';
import styleAppHeader from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from "react-router-dom";

function AppHeader() {
  const [type, setType] = useState('construct');

  return (
    <header className={styleAppHeader.header}>
      <nav className={styleAppHeader.content}>
        <ul className={`${styleAppHeader.nav__list} m-4`}>
          <li>
            <NavLink
              className={`${styleAppHeader.link} p-4 text text_type_main-default`}
              activeClassName={styleAppHeader.link_active}
              to={{pathname: '/'}}
              exact
              onClick={() => setType('construct')}
            >
              <BurgerIcon type={type === 'construct' ? 'primary' : 'secondary'} />
              <p className={styleAppHeader.text}>Конструктор</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${styleAppHeader.link} p-4 text text_type_main-default`}
              activeClassName={styleAppHeader.link_active}
              to={{pathname: '/profile/orders'}}
              exact
              onClick={() => setType('strip')}
            >
              <ListIcon type={type === 'strip' ? 'primary' : 'secondary'} />
              <p className={styleAppHeader.text}>Лента заказов</p>
            </NavLink>
          </li>
        </ul>
        <div className={styleAppHeader.logo}>
          <NavLink 
            to={{pathname: '/'}}
            exact
            onClick={() => setType('construct')}
          >
            <Logo />
          </NavLink>

        </div>
        <ul className={styleAppHeader.nav__list}>
          <li>
            <NavLink
              className={`${styleAppHeader.link} p-4 text text_type_main-default`}
              activeClassName={styleAppHeader.link_active}
              to={{pathname: '/profile'}}
              exact
              onClick={() => setType('profile')}
            >
              <ProfileIcon type={type === 'profile' ? 'primary' : 'secondary'} />
              <p className={styleAppHeader.text}>Личный кабинет</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default AppHeader;