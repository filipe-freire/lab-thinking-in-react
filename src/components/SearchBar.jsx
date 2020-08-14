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
        />
      </form>
    </div>
  );
};

export default SearchBar;
