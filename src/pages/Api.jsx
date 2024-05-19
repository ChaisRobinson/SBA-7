import React from "react";

const ApiSearchBar = () => {
  return (
    <div className="api-search-container">
      <h1 className="title">Image Search</h1>
      <p className="description">
        Use the search bar below to find any image you want.
      </p>
      <div className="search-bar-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Search Anything..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default ApiSearchBar;
