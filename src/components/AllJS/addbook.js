import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../../redux/books/books';

const AddBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const removeBook = (id) => {
    dispatch(REMOVE_BOOK(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={() => removeBook(id)} type="button">
        Remove
      </button>
    </div>
  );
};

AddBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default AddBook;
