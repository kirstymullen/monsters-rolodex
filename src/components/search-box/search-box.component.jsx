import React from 'react';
import PropTypes from 'prop-types';
import './search-box.styles.css';

// Functional component
export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};
