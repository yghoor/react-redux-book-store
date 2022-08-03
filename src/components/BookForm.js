/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';

const BookForm = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

import React from 'react';

  return (
    <div className="book-form">
      <h2>ADD NEW BOOK</h2>

    <form method="post" className="add-book">
        <label>
          <input type="text" name="title" maxLength="60" value={inputText.title} placeholder="Book title" className="title" onChange={onChange} required />
        </label>

        <label>
          <input type="text" name="author" maxLength="60" value={inputText.author} placeholder="Author" className="author" onChange={onChange} required />
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
};

export default BookForm;
