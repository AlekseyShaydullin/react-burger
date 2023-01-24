import React, { useState, useEffect, useCallback } from 'react';
import styleResetPass from './ResetPassPage.module.css';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../utils/types/main';
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../../services/actions/usersAction';

function ResetPassPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { successEmail } = useSelector(store => store.userInfo);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if(!successEmail) {
      history.replace({ pathname: '/forgot-password' });
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword(password, token));
    history.replace({ pathname: '/login' })
  };

  const login = useCallback(() => {
    history.replace({ pathname: '/login' })
  }, [history]);
  
  return(
    <section className={styleResetPass.wrapper}>
      <form className={styleResetPass.form} onSubmit={onSubmit}>
        <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          name={'password'}
          icon={'HideIcon'}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          value={token}
          name={'name'}
          error={false}
          errorText={'Error'}
          size={'default'}
          onChange={e => setToken(e.target.value)}
        />
        <Button type={'primary'} htmlType={'submit'}>Сохранить</Button>
      </form>
      <div className={styleResetPass.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
        <Button
          type={'secondary'}
          extraClass={styleResetPass.link}
          htmlType={'button'}
          onClick={login}
        >
          Войти
        </Button>
      </div>
    </section>
  )
}

export default ResetPassPage;