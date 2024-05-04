import React from 'react';
const BookPage = ({image, name, author, description}) => {
  return (
<div className="book_details">
  <div className="book_info">
    <img src={image} alt={name}/>
    <h2>{name}</h2>
    <p>{author}</p>
  </div>
  <div className="book_description">
    <h2>Описание</h2>
    <p>{description}</p>
  </div>
</div>
  );
};

export default BookPage;