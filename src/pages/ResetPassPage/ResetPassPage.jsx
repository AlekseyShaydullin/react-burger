import React from 'react';
import styleResetPass from './ResetPassPage.module.css';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPassPage() {
  
  return(
    <>
      <section className={styleResetPass.wrapper}>
        <form className={styleResetPass.form}>
          <h1 className='text text_type_main-medium'>Восстановление пароля</h1>
          <PasswordInput placeholder={'Введите новый пароль'} name={'password'} icon={'HideIcon'} />
          <Input type={'text'} placeholder={'Введите код из письма'} />
          <Button type={'primary'} htmlType={'submit'}>Сохранить</Button>
        </form>
        <div className={styleResetPass.clarification}>
          <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
          <Button type={'secondary'} extraClass={styleResetPass.link} htmlType={'button'}>Войти</Button>
        </div>
      </section>
    </>
  )
}

export default ResetPassPage;