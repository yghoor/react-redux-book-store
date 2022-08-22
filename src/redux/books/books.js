const RETRIEVE_BOOKS = 'react-redux-book-store/books/RETRIEVE_BOOKS';
const NO_BOOKS_IN_STORE = 'react-redux-book-store/books/NO_BOOKS_IN_STORE';
const ADD_BOOK = 'react-redux-book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'react-redux-book-store/books/REMOVE_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_BOOKS:
      return [...state, action.payload];
    case NO_BOOKS_IN_STORE:
      return state;
    case ADD_BOOK:
      return Object.assign([], state, { 0: action.payload });
    case REMOVE_BOOK:
      return Object.assign([], state, { 0: action.payload });
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

export const addBook = (payload) => async (dispatch) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3eIgjc1cLtb5eamuunbl/books',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  const books = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3eIgjc1cLtb5eamuunbl/books',
  )
    .then((response) => response.json());

  dispatch({
    type: ADD_BOOK,
    payload: books,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3eIgjc1cLtb5eamuunbl/books/${payload}`,
    {
      method: 'DELETE',
    },
  );

  const books = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3eIgjc1cLtb5eamuunbl/books',
  )
    .then((response) => response.json());

  dispatch({
    type: REMOVE_BOOK,
    payload: books,
  });
};
