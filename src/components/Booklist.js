import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';

const Booklist = () => {
  const booklist = useSelector((state) => state.booksReducer);

  if (booklist.length === 0) {
    return (
      <div className="no-books">
        <h1>No books in the store</h1>
      </div>
    );
  }

  return (
    <div className="booklist">
      <ul>
        {booklist.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} id={book.id} />
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
