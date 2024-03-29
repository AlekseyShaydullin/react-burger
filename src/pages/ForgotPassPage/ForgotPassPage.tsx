import React, { FC, useCallback, useState, MouseEventHandler } from 'react';
import styleForgotPass from './ForgotPassPage.module.css';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../utils/types/main';
import { useHistory } from 'react-router-dom';
import { forgotPassword } from '../../services/actions/usersAction';

const ForgotPassPage: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [valEmail, setValEmail] = useState('');
  
  const onSubmit: MouseEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch(forgotPassword(valEmail));
    history.replace({ pathname: '/reset-password' });
  };

  const login = useCallback(() => {
    history.replace({ pathname: "/login" });
  }, [history]);

  return(
    <section className={styleForgotPass.wrapper}>
      <form className={styleForgotPass.form} onSubmit={onSubmit}>
        <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
        <EmailInput 
          name={'email'} 
          placeholder={'Укажите e-mail'} 
          value={valEmail}
          onChange={e => setValEmail(e.target.value)}
        />
        <Button type={'primary'} htmlType={'submit'}>Восстановить</Button>
      </form>
      <div className={styleForgotPass.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
        <Button 
          type={'secondary'} 
          extraClass={styleForgotPass.link} 
          htmlType={'button'}
          onClick={login}
        >
          Войти
        </Button>
      </div>
    </section>
  )
}

export default ForgotPassPage;