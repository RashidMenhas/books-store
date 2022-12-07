import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './addbook';
import { getBooks } from '../../redux/books/books';

function BookList() {
  const selector = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      {selector.map((book) => (
        <AddBook
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </div>
  );
}
export default BookList;
