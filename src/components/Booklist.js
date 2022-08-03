import React from 'react';
import Book from './Book';

const Booklist = () => (
  <div className="books-page">
    <ul>
      <li>
        <Book />
      </li>

      <li>
        <Book />
      </li>

      <li>
        <Book />
      </li>
    </ul>
  </div>
);

export default Booklist;
