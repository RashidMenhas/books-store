import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ title, auther }) => (
  <div>
    <h2>{title}</h2>
    <h3>{auther}</h3>
    <button type="button">Remove</button>
  </div>
);

AddBook.propTypes = {
  title: PropTypes.string.isRequired,
  auther: PropTypes.string.isRequired,
};
export default AddBook;
