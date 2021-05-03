import React from 'react';
import './Search.css';

function Search({ onChange }) {
  return (
    <div className='find-card'>
      <input
        type='search'
        id='gsearch'
        placeholder='Pesquisar'
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
