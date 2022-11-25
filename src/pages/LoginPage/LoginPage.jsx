import React from "react";
import { EmailInput,PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styleLoginPage from './LoginPage.module.css';

function LoginPage () {
  
return (
  <>
    <section className={styleLoginPage.wrapper}>
      <form className={`${styleLoginPage.form} mb-20`}>
        <h1 className='text text_type_main-medium'>Вход</h1>
        <EmailInput name={'email'} placeholder={'E-mail'} />
        <PasswordInput name={'password'} icon={'HideIcon'} />
        <Button type={'primary'} htmlType={'submit'}>Войти</Button>
      </form>
      <div className={styleLoginPage.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</p>
        <Button type={'secondary'} extraClass={styleLoginPage.link} htmlType={'button'}>Зарегистрироваться</Button>
      </div>
      <div className={styleLoginPage.clarification}>
        <p className='text text_type_main-default text_color_inactive'>Забыли пароль?</p>
        <Button type={'secondary'} extraClass={styleLoginPage.link} htmlType={'button'}>Восстановить пароль</Button>
      </div>
    </section>
  </>
)
}

export default LoginPage;