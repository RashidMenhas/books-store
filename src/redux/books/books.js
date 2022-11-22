import { createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('ADD_BOOK');
export const REMOVE_BOOK = createAction('REMOVE_BOOK');

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
  } if (action.type === REMOVE_BOOK.type) {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
};
