// components/SearchResults.js
import React from 'react';

import "../styles/SearchResults.css";

const SearchResults = ({ results, onResultClick }) => {
  return (
    <div className='results'>

      {results.map((result) => (
        <div key={result.objectID} className="mb-2 result">
          <div className='result-title'>{result.title}</div>
          <div className="result-explore" onClick={() => onResultClick(result)}>
            <span>Explore</span>&nbsp;<img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/24/external-link.png" alt="external-link"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
