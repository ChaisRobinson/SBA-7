import React from "react";
import React, { useState, useEffect } from "react";

const ApiSearchBar = () => {
    const Access_Key = "vsbQ35Vlp5xe4sFsjOtc6mBvt8CE4oZ2aGnUML0o_9I";
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);

const fetchRequest = async () => {
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
      };

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
