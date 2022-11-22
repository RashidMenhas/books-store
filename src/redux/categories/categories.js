import { createAction } from '@reduxjs/toolkit';

export const STATUS = createAction('STATUS');

export const CategoriesReducer = (state = [], action) => {
  if (action.type === STATUS.type) {
    return [...nstate, { status: 'Under Construction' }];
  }
  return state;
};
