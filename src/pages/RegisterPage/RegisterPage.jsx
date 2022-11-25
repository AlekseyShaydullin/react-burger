import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styleRegisterPage from './RegisterPage.module.css';

function RegisterPage() {

  return(
    <>
      <section>
        <div className={styleRegisterPage.wrapper}>
          <form className={styleRegisterPage.form}>
            <h1 className='text text_type_main-medium'>Регистрация</h1>
            <Input type={'text'} placeholder={'имя'} name={'name'} />
            <EmailInput name={'email'} placeholder={'E-mail'} />
            <PasswordInput name={'password'} icon={'HideIcon'} />
            <Button type={'primary'} htmlType={'submit'}>Зарегистрироваться</Button>
          </form>
          <div className={styleRegisterPage.clarification}>
            <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</p>
            <Button type={'secondary'} extraClass={styleRegisterPage.link} htmlType={'button'}>Войти</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterPage;