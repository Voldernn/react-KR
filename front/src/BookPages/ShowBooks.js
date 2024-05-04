import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const ShowBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books`)
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return ( <div className="book-list">
  {books.map(book => (
  <BookCard link={`/books/details/${book._id}`} name={book.name}
  author={book.author} image={book.image} /> ))}
  </div> );
};

export default ShowBooks;