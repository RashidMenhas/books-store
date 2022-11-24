import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addbook';

const BookList = () => {
  const selector = useSelector((state) => state.bookReducer);

  return (
    <div>
      {selector.map((book) => (
        <AddBook key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </div>
  );
};
export default BookList;
