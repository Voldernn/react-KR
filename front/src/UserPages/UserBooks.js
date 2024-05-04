import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookCard from '../BookPages/BookCard';
import { useNavigate } from 'react-router-dom';

const UserBooks = () => {
  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);
  const { login } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`https://react-kr.vercel.app/users/login/${login}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
    axios
      .get(`https://react-kr.vercel.app/books/`)
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const auth = () => {
    history(`/user/login/${login}`);
  };
  if (user === null) {
    return ( <div>Пользователь не найден. Пожалуйста, проверьте введенный логин.</div>);
  } else {
  const filteredBooks = books.filter((book) => user.books.includes(book._id));
  //console.log(user.books.includes('6632e7610cbcb43f585e6233'));
  return ( <div><div className="book-list">
  {filteredBooks.map(
  book => (
  <BookCard link={`/books/details/${book._id}`} name={book.name}
  author={book.author} image={book.image} /> ))}
  </div>
  <button onClick={auth}>Добавить</button>
  </div>);
  }
};

export default UserBooks;