import React from 'react';

const Book = () => (
  <div className="book">
    <div className="book-details">
      <h2>Book Title</h2>

      <p>Author</p>
    </div>

    <div className="book-options">
      <button type="button" className="remove-btn">Remove</button>
    </div>
  </div>
);

export default Book;
