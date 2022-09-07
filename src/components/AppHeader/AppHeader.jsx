import React from 'react';
import style from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../NavLink/NavLink';

function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <nav>
          <ul className={style.navlist}>
            <li>
              <NavLink text={'Конструктор'} icon={<BurgerIcon type='primary' />} />
            </li>
            <li>
              <NavLink text={'Лента заказов'} icon={<ListIcon type='secondary' />} />
            </li>
          </ul>
        </nav>
        <div className={style.logo}>
          <Logo />
        </div>
        <nav>
          <ul className={style.navlist}>
            <li>
              <NavLink text={'Личный кабинет'} icon={<ProfileIcon type='secondary' />} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;