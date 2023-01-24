import React, { useState, useCallback } from 'react';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styleRegisterPage from './RegisterPage.module.css';
import { useDispatch, useSelector } from '../../utils/types/main';
import { Redirect, useHistory } from 'react-router-dom';
import { register } from '../../services/actions/usersAction';

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(store => store.userInfo);
  const [valName, setValName] = useState('');
  const [valPass, setValPass] = useState('');
  const [valEmail, setValEmail] = useState('');

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(register({ email: valEmail, password: valPass, name: valName }))
    }, [dispatch, valEmail, valName, valPass]);

    const login = useCallback(() => {
      history.replace({ pathname: '/login' })
    }, [history]);

    if(user.name) {
      return <Redirect to={{ pathname: '/' }} />
    }

  return(
    <section className={styleRegisterPage.wrapper}>
      <form className={styleRegisterPage.form} onSubmit={onSubmit}>
        <h1 className='text text_type_main-medium'>Регистрация</h1>
        <Input 
          type={'text'}
          placeholder={'Имя'}
          name={'name'}
          value={valName}
          error={false}
          errorText={'Error'}
          size={'default'}
          onChange={e => setValName(e.target.value)}
        />
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
        <Button type={'primary'} htmlType={'submit'}>Зарегистрироваться</Button>
      </form>
      <div className={styleRegisterPage.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</p>
        <Button 
          type={'secondary'} 
          extraClass={styleRegisterPage.link} 
          htmlType={'button'} 
          onClick={login}
        >
          Войти
        </Button>
      </div>
    </section>
  )
}

export default RegisterPage;