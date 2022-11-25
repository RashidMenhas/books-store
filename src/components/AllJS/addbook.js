import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const AddBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const removeBookBtn = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={() => removeBookBtn(id)} type="button">
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
