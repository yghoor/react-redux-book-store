/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BookForm = () => (
  <div className="book-form">
    <h2>ADD NEW BOOK</h2>

    <form method="post" className="add-book">
      <label>
        <input type="text" maxLength="60" placeholder="Book title" className="title" required />
      </label>

      <label>
        <select placeholder="Category">
          <option value="category1">category1</option>
          <option value="category2">category2</option>
          <option value="category3">category3</option>
        </select>
      </label>

      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
