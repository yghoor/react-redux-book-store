const RETRIEVE_BOOKS = 'react-redux-book-store/books/RETRIEVE_BOOKS';
const ADD_BOOK = 'react-redux-book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'react-redux-book-store/books/REMOVE_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_BOOKS:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

export const retrieveBooks = () => async (dispatch) => {
  const books = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3eIgjc1cLtb5eamuunbl/books',
  )
    .then((response) => response.json());

  if (Object.keys(books).length === 0) {
    dispatch({
      type: NO_BOOKS_IN_STORE,
    });
  } else {
    dispatch({
      type: RETRIEVE_BOOKS,
      payload: books,
    });
  }
};

  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
