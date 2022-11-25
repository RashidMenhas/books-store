import { createAction } from '@reduxjs/toolkit';
import api from '../../api/api';

export const ADD_BOOK = createAction('ADD_BOOK');
export const REMOVE_BOOK = createAction('REMOVE_BOOK');
export const GET_BOOKS = createAction('GET_BOOKS');

export const bookReducer = (state = [], action) => {
  if (action.type === ADD_BOOK.type) {
    return [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
  }
  if (action.type === GET_BOOKS.type) {
    return action.payload;
  }
  if (action.type === REMOVE_BOOK.type) {
    return state.filter((item) => item.id !== action.payload);
  }
  return state;
};

export const removeBook = (bookId) => async (dispatch) => {
  api.deleteBook(bookId);
  dispatch(REMOVE_BOOK(bookId));
};

export const getBooks = () => async (dispatch) => {
  const books = await api.fetchBooks();
  dispatch(GET_BOOKS(books));
};
