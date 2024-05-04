import React from 'react';
import { Link } from 'react-router-dom';
const BookCard = ({image, name, author, link}) => {
  return (
    <div className="book-card">
      <img src={image} alt={name}/>
      <h2><Link to={link}>{name}</Link></h2>
      <p>{author}</p>
    </div>
  );
};

export default BookCard;
