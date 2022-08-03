/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author, id }) => {
const Book = () => (
  <div className="book">
    <div className="book-details">
  return (
    <div className="book">
      <div className="book-details">
        <h2>{ title }</h2>
        <p>{ author }</p>
      </div>

      <div className="book-options">
      <button type="button" className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default Book;
