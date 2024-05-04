import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [user, setUser] = useState({});
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Books, setBooks] = useState('');
  const [Book, setBook] = useState('');
  const { login } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/users/login/${login}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
      axios
      .get(`http://localhost:5555/books/`)
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUserLogin = () => {
    const matchingBooks = Books.map((book) => book.name.includes(Book));
    const hasMatchingBook = matchingBooks.some((book) => book);
    const bookID = Books.find(book => book.name === Book);
    if ((user.email == Email) & (user.password == Password) & (hasMatchingBook)) {
        const requestBody = { books: [bookID._id] };
        axios
          .put(`http://localhost:5555/users/login/${login}`, requestBody)
        history(`/user/books/${login}`);
    } else {
        alert('Пожалуйста, проверьте введенные данные');
    }
};

const handleBacktoUser = () => {
  history(`/user/books/${login}`);
};


  return (
    <div><div className="ID_enter">
        <input
            type="text"
            placeholder="Введите Email пользователя"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="text"
            placeholder="Введите пароль пользователя"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="text"
            placeholder="Введите название книги"
            value={Book}
            onChange={(e) => setBook(e.target.value)}
        />
        <button onClick={handleUserLogin}>Отправить</button>
        <button onClick={handleBacktoUser}>Назад</button>
    </div>
    </div>
);
};

export default UserLogin;