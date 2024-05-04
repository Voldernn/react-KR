import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserReg = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`https://react-kr.vercel.app/users`)
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
        setUsers(null);
      });
  }, []);

  const handleUserReg = () => {
    const data = {
        login,
        email,
        password,
    }
    const existingUser = users.find((user) => user.login === login || user.email === email);
    const hasEmptyValues = Object.values(data).some(value => !value);
    console.log(existingUser);
    if ((!existingUser) & (!hasEmptyValues)) {
        axios
          .post(`https://react-kr.vercel.app/users/`, data)
        history(`/`);
    } else {
        alert('Пожалуйста, проверьте введенные данные');
    }
};
  return (
    <div><div className="ID_enter">
        <input
            type="text"
            placeholder="Введите login пользователя"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
        />
        <input
            type="text"
            placeholder="Введите Email пользователя"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="text"
            placeholder="Введите пароль пользователя"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleUserReg}>Зарегистрироваться</button>
    </div>
    </div>
);
};

export default UserReg;