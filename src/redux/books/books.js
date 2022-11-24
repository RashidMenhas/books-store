import { createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('ADD_BOOK');
export const REMOVE_BOOK = createAction('REMOVE_BOOK');

const initialdata = [
  {
    id: '1',
    title: 'java',
    author: 'Rashid',
  },
  {
    id: '2',
    title: 'javascript',
    author: 'Menhas',
  },
  {
    id: '3',
    title: 'Data structure and Algorithm ',
    author: 'Sami ullah',
  },
  {
    id: '4',
    title: ' Algorithm ',
    author: 'Saboor',
  },
];

export const bookReducer = (state = initialdata, action) => {
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
  if (action.type === REMOVE_BOOK.type) {
    return state.filter((item) => item.id !== action.payload);
  }
  return state;
};
