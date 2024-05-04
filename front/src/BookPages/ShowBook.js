import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookPage from './BookPage';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://react-kr.vercel.app/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BookPage name={book.name} author={book.author} image={book.image} description={book.description}/>
  );
};

export default ShowBook;