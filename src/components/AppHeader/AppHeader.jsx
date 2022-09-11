import React from 'react';
import styleAppHeader from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../NavLink/NavLink';

function AppHeader() {
  return (
    <header className={styleAppHeader.header}>
      <nav className={styleAppHeader.content}>
        <ul className={`${styleAppHeader.nav__list} m-4`}>
          <li>
            <NavLink text={'Конструктор'} className='p-4 m-4' icon={<BurgerIcon type={'primary'} />} />
          </li>
          <li>
            <NavLink text={'Лента заказов'} className='p-4 m-4' icon={<ListIcon type={'secondary'} />} type={'secondary'} />
          </li>
        </ul>
        <div className={styleAppHeader.logo}>
          <Logo />
        </div>
        <ul className={styleAppHeader.navlist}>
          <li>
            <NavLink text={'Личный кабинет'} className='p-4 m-4' icon={<ProfileIcon type={'secondary'} />} type={'secondary'} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;