import React, { useState } from 'react';
import '../AllCSS/books.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookList from './booklist';
import { ADD_BOOK } from '../../redux/books/books';
import api from '../../api/api';

const Books = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const addbookhandler = (event) => {
    const titlecheck = event.target.parentNode.children[0];
    const authorcheck = event.target.parentNode.children[1];
    event.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    if (titlecheck.value === '' || authorcheck.value === '') {
      alert('Please fill the field');
    } else {
      api.addNewBook(book);
      dispatch(ADD_BOOK(book));
      titlecheck.value = '';
      authorcheck.value = '';
    }
  };
  const titlefun = (e) => (setTitle(e.target.value));
  const authorfun = (e) => (setAuthor(e.target.value));
  return (
    <div>
      <BookList />
      <div className="input-form">
        <h3>ADD NEW BOOK</h3>
        <div className="input-form-feild">
          <input onChange={titlefun} type="text" placeholder="Book Title" className="booktitle" />
          <input onChange={authorfun} type="text" placeholder="Author Name" className="category" />
          <button onClick={addbookhandler} type="button" value="ADD BOOK" className="add-book">
            ADD BOOK
          </button>
        </div>
      </div>
    </div>
  );
};
export default Books;
