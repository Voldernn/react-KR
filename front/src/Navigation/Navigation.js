import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <ul>
    <li><Link to="/">Главная</Link></li>
    <li><Link to="/books">Доступные книги</Link></li>
    <li><Link to="/user">Пользователи</Link></li>
    <li><Link to="/registration">Регистрация</Link></li>
    </ul>
    );
}
export default Navigation;
