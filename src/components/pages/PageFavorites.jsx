import React, { useState } from 'react';
import Search from '../find/Search';
import Card from '../card/Card';
import './PageFavorite.css';

function PageFavorites() {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem('favoritos'))
  );
  const [names, setNames] = useState([]);

  console.log('Lista favoritos', names);
  // filtra o card por nome
  function searchName(rows) {
    console.log('função', rows);

    return rows.filter((row) =>
      row.title
        ? row.title.toLowerCase().indexOf(names) > -1
        : row.name.toLowerCase().indexOf(names) > -1
    );
  }

  if (favorite == null) {
    return <div>Favoritos vazio!</div>;
  }

  return (
    <div>
      <Search onChange={(e) => setNames(e.target.value)} />
      <Card data={searchName(favorite)} className='remove' />
    </div>
  );
}

export default PageFavorites;
