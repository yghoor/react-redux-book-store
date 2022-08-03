/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-details">
        <h2>{ title }</h2>
        <p>{ author }</p>
      </div>

      <div className="book-options">
        <button type="button" className="remove-btn" onClick={() => dispatch(removeBook(id))}>Remove</button>
      </div>
    </div>
  );
};

export default Book;
