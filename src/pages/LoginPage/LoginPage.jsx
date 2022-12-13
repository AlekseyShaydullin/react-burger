import React, { useState, useCallback } from 'react';
import { EmailInput,PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styleLoginPage from './LoginPage.module.css';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/actions/usersAction';

function LoginPage () {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [valPass, setValPass] = useState('');
  const [valEmail, setValEmail] = useState('');
  const { user } = useSelector(store => store.userInfo);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(
        login({email: valEmail, password: valPass, history: history})
      );
    },
    [dispatch, history, valEmail, valPass]
  );
  
  const register = () => {
    history.replace({ pathname: '/register' })
  }

  const forgotPassword = () => {
    history.replace({ pathname: '/forgot-password' })
  }
  
  if(user.name) {
    return <Redirect to={location?.state?.from || '/'} />
  }

return (
  <>
    <section className={styleLoginPage.wrapper}>
      <form className={`${styleLoginPage.form} mb-20`} onSubmit={onSubmit}>
        <h1 className='text text_type_main-medium'>Вход</h1>
        <EmailInput 
          name={'email'}
          placeholder={'E-mail'}
          value={valEmail}
          onChange={e => setValEmail(e.target.value)}
        />
        <PasswordInput 
          name={'password'}
          icon={'HideIcon'}
          value={valPass}
          onChange={e => setValPass(e.target.value)}
        />
        <Button type={'primary'} htmlType={'submit'}>Войти</Button>
      </form>
      <div className={styleLoginPage.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</p>
        <Button 
          type={'secondary'} 
          extraClass={styleLoginPage.link} 
          htmlType={'button'}
          onClick={register}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className={styleLoginPage.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Забыли пароль?</p>
        <Button 
        type={'secondary'} 
        extraClass={styleLoginPage.link} 
        htmlType={'button'}
        onClick={forgotPassword}
      >
        Восстановить пароль
      </Button>
      </div>
    </section>
  </>
)
}

export default LoginPage;