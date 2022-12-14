import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getUser, logout, updateUser } from "../../services/actions/usersAction";
import styleProfilePage from './ProfilePage.module.css';

function ProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(store => store.userInfo);
  const [valName, setValName] = useState('');
  const [valPass, setValPass] = useState('');
  const [valEmail, setValEmail] = useState('');

  useEffect(() => {
    if(user) {
      dispatch(getUser());
      setValName(user.name);
      setValEmail(user.email);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({ email: valEmail, password: valPass, name: valName })
    )
  };

  const cancelChange = () => {
    setValName(user.name);
    setValEmail(user.email);
  };

  const logoutUser = useCallback(() => {
    dispatch(logout());
    history.replace({ pathname: '/login' })
  }, [dispatch, history])

  return(
    <section className={styleProfilePage.wrapper}>
      <nav className={styleProfilePage.nav}>
        <ul className={styleProfilePage.list}>
          <li className={styleProfilePage.item}>
            <NavLink 
              to={{ pathname: '/profile' }} 
              className={`${styleProfilePage.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styleProfilePage.active_link}>
                Профиль
            </NavLink>
          </li>
          <li className={styleProfilePage.item}>
            <NavLink 
              to={{ pathname: '/profile/order' }} 
              className={`${styleProfilePage.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styleProfilePage.active_link}>
                История заказов
            </NavLink>
          </li>
          <li className={styleProfilePage.item}>
            <NavLink 
              to={{ pathname: '/login' }} 
              className={`${styleProfilePage.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styleProfilePage.active_link}
              onClick={logoutUser}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styleProfilePage.form} onSubmit={onSubmit}>
        <Input 
          type={'text'} 
          placeholder={'Имя'} 
          icon={'EditIcon'}
          value={user.name}
          name={'name'}
          error={false}
          errorText={'Error'}
          size={'default'}
          onChange={e => setValName(e.target.value)}
        />
        <EmailInput 
          placeholder={'Логин'} 
          isIcon={true}
          value={user.email}
          name={'email'}
          onChange={e => setValEmail(e.target.value)}
        />
        <PasswordInput 
          placeholder={'Пароль'} 
          icon={'EditIcon'}
          value={valPass}
          name={'password'}
          onChange={e => setValPass(e.target.value)}
        />
        <div className={styleProfilePage.button}>
          <Button type={'secondary'} htmlType={'button'} onClick={cancelChange}>Отмена</Button>
          <Button type={'primary'} htmlType={'submit'}>Сохранить</Button>
        </div>
      </form>
    </section>
  )
}

export default ProfilePage;