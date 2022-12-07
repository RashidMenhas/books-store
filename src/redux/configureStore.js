import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { bookReducer } from './books/books';
import { CategoriesReducer } from './categories/categories';

const rootreducer = combineReducers({
  CategoriesReducer,
  bookReducer,
});

const store = configureStore({ reducer: rootreducer });

export default store;
