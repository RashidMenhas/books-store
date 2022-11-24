import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { bookReducer } from './books/books';
import { CategoriesReducer } from './categories/categories';

// export default function combineReducer() {
//   return configureStore({ bookReducer, CategoriesReducer });
// }

// export const store = createStore(combineReducer());
const rootreducer = combineReducers({
  CategoriesReducer,
  bookReducer,
});

const store = configureStore({ reducer: rootreducer });

export default store;
