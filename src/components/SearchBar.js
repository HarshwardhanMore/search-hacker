// SearchBar.js
import React, { useState } from 'react';
import "../styles/SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='searchbar-main'>
      <input
        type="text"
        placeholder='Search For News here!'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
