import { Link } from "react-router-dom";
import styleErrorPage from "./ErrorPage.module.css";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import loadingImg from '../../images/Loading-404.gif';

const ErrorPage = () => {
  return (
    <section className={styleErrorPage.wrapper}>
      <img className={styleErrorPage.img} src={loadingImg} alt='Загрузка' />
      <h1 className={styleErrorPage.title}>404</h1>
      <p className={`text text_type_digits-default ${styleErrorPage.text}`}>
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
        существует. Возможно она устарела, была удалена, или был введен неверный
        адрес в адресной строке
      </p>
      <Link className={styleErrorPage.link} to="/">
        <Button
          type={'primary'}
          size={'large'}
        >
          Перейти на главную страницу
        </Button>
      </Link>
    </section>
  );
};

export default ErrorPage;