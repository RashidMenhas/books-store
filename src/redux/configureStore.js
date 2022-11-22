import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './books/books';
import { CategoriesReducer } from './categories/categories';

export default function combineReducer() {
  return configureStore({ bookReducer, CategoriesReducer });
}
