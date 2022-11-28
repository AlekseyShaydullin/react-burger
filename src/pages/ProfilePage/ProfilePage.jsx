import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { NavLink } from "react-router-dom";
import styleProfilePage from './ProfilePage.module.css';

function ProfilePage() {

  return(
    <>
      <section className={styleProfilePage.wrapper}>
        <nav className={styleProfilePage.nav}>
          <ul className={styleProfilePage.list}>
            <li className={styleProfilePage.item}>
              <NavLink 
                to={{ pathname: "/profile" }} 
                className={`${styleProfilePage.link} text text_type_main-medium text_color_inactive`}
                activeClassName={styleProfilePage.active_link}>
                  Профиль
              </NavLink>
            </li>
            <li className={styleProfilePage.item}>
              <NavLink 
                to={{ pathname: "/profile/order" }} 
                className={`${styleProfilePage.link} text text_type_main-medium text_color_inactive`}
                activeClassName={styleProfilePage.active_link}>
                  История заказов
              </NavLink>
            </li>
            <li className={styleProfilePage.item}>
              <NavLink 
                to={{ pathname: "/login" }} 
                className={`${styleProfilePage.link} text text_type_main-medium text_color_inactive`}
                activeClassName={styleProfilePage.active_link}>
                  Выход
              </NavLink>
            </li>
          </ul>
          <p className="text text_type_main-default text_color_inactive">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </nav>
        <form className={styleProfilePage.form}>
          <Input type={'text'} placeholder={'Имя'} icon={'EditIcon'}/>
          <EmailInput placeholder={'Логин'} isIcon={true}/>
          <PasswordInput placeholder={'Пароль'} icon={'EditIcon'}/>
          <div className={styleProfilePage.button}>
            <Button type={'primary'} htmlType={'submit'}>Сохранить</Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ProfilePage;