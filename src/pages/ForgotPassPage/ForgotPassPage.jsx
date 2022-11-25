import React from 'react';
import styleForgotPass from './ForgotPassPage.module.css';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassPage() {
  
  return(
    <>
      <section className={styleForgotPass.wrapper}>
        <form className={styleForgotPass.form}>
          <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
          <EmailInput name={'email'} placeholder={'Укажите e-mail'} />
          <Button type={'primary'} htmlType={'submit'}>Восстановить</Button>
        </form>
        <div className={styleForgotPass.clarification}>
          <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
          <Button type={'secondary'} extraClass={styleForgotPass.link} htmlType={'button'}>Войти</Button>
        </div>
      </section>
    </>
  )
}

export default ForgotPassPage;