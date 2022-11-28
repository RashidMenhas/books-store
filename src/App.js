import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Books from './components/AllJS/books';
import Categories from './components/AllJS/categories';
import './app.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1 className="logo">BookStore CMS</h1>
            <ul className="links">
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <div>
                <div className="oval"><img src={`${process.env.PUBLIC_URL}images/profile-icon.svg`} alt="profile-icon" /></div>
              </div>
            </ul>

          </nav>

          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
