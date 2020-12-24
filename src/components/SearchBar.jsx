import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form action="">
        <label htmlFor="search-input">Search</label>
        <br />
        <input
          id="search-input"
          type="text"
          placeholder="Seach for a Product"
          onChange={(event) => props.onEdit(event.target.value)}
        />{' '}
        <br />
        <input
          id="checkbox-input"
          type="checkbox"
          onChange={(event) => props.inStock(event.target.value)}
        />
        <label htmlFor="checkbox-input">Only show products in stock</label>
      </form>
    </div>
  );
};

export default SearchBar;
