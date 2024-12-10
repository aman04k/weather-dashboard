import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState(""); // Local state to handle input field

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityInput) {
      onSearch(cityInput); // Pass the city input to the parent
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={cityInput}
        placeholder="Enter a city"
        onChange={(e) => setCityInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
