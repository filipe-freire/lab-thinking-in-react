import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="search-input">Search</label>
        <br />
        <input
          id="search-input"
          type="text"
          placeholder="Seach for a Product"
        />
      </form>
    </div>
  );
};

export default SearchBar;
