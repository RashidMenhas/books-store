import React from 'react';
import '../AllCSS/categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from '../../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.CategoriesReducer);
  const dispatch = useDispatch();

  const handleStatus = () => dispatch(STATUS());
  return (
    <div>
      <p>{categories}</p>
      <button onClick={handleStatus} type="button" className="check-status">
        Check Status
      </button>
    </div>
  );
};
export default Categories;
