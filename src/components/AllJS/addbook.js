/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import '../AllCSS/addBook.css';

const AddBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const removeBookBtn = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className="book-form">
        <div className="card">
          <div className="book-info">
            <p className="action">action</p>
            <h2 className="title">{title}</h2>
            <h3 className="author">{author}</h3>
            <div className="set-btn">
              <p className="btn-comments">Comments</p>
              <p
                className="btn-remove"
                onClick={() => removeBookBtn(id)}
                onKeyUp={() => removeBookBtn(id)}
              >
                Remove
              </p>
              <p className="btn-edit">Edit</p>
            </div>
          </div>
          <div className="completion">
            <div className="medile-section">
              <div className="Oval-2" />
              <span className="Percent-Complete">
                64%
                <br />
                <span className="Completed Text-Style-2">Completed</span>
              </span>
            </div>
            <div className="vertical-line" />
            <div className="end-section">
              <span className="Current-Chapter">Current Chapter</span>
              <span className="Current-Lesson Text-Style-4">Chapter 17</span>
              <div className="update-btn">UPDATE PROGRESS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default AddBook;
