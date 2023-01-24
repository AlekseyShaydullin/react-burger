import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from '../../utils/types/main';
import NavProfile from "../../components/NavProfile/NavProfile";
import { updateUser } from "../../services/actions/usersAction";
import styleProfilePage from './ProfilePage.module.css';

function ProfilePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.userInfo);
  const [valName, setValName] = useState('');
  const [valPass, setValPass] = useState('');
  const [valEmail, setValEmail] = useState('');

  useEffect(() => {
    if(user) {
      setValName(user.name);
      setValEmail(user.email);
    }
  }, [user]);

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

  return(
    <section className={styleProfilePage.wrapper}>
      <nav className={styleProfilePage.nav}>
        <NavProfile />
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <form className={styleProfilePage.form} onSubmit={onSubmit}>
        <Input 
          type={'text'} 
          placeholder={'Имя'} 
          icon={'EditIcon'}
          value={valName}
          name={'name'}
          error={false}
          errorText={'Error'}
          size={'default'}
          onChange={e => setValName(e.target.value)}
        />
        <EmailInput 
          placeholder={'Логин'} 
          isIcon={true}
          value={valEmail}
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
          <Button type={'secondary'} htmlType={'button'} onClick={()=> cancelChange()}>Отмена</Button>
          <Button type={'primary'} htmlType={'submit'}>Сохранить</Button>
        </div>
      </form>
    </section>
  )
}

export default ProfilePage;