import React from 'react';

import Suggestions from './Suggestions';

const SearchBox = () => {
  return (
    <div className="search-box ml-3 mt-3">
      <div>
        <i className="fas fa-search ml-5" />
      </div>
      <Suggestions />
    </div>
  );
};

export default SearchBox;
