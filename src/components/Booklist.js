import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveBooks } from '../redux/books/books';
import Book from './Book';

const Booklist = () => {
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  if (booklist.length === 0 || Object.keys(booklist[0]).length === 0) {
    return (
      <div className="no-books">
        <h1>No books in the store</h1>
      </div>
    );
  }

  const books = booklist[0];
  const bookIDs = Object.keys(books);

  return (
    <div className="booklist">
      <ul>
        {bookIDs.map((id, i) => (
          <Book
            key={Object.keys(books)[i]}
            title={books[id][0].title}
            author={books[id][0].author}
            category={books[id][0].category}
            id={Object.keys(books)[i]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
