import React from 'react';
import '../AllCSS/books.css';
import BookList from './booklist';

const Books = () => (
  <div>
    <BookList />
    <div className="input-form">
      <h3>ADD NEW BOOK</h3>
      <div className="input-form-feild">
        <input type="text" placeholder="Book Title" className="booktitle" />
        <input type="text" placeholder="Author Name" className="category" />
        <button type="button" value="ADD BOOK" className="add-book">
          ADD BOOK
        </button>
      </div>
    </div>
  </div>
);
export default Books;
