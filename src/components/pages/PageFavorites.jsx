import React from 'react';
import Card from '../card/Card';

function PageFavorites() {
  const favorites = localStorage.getItem('favoritos');
  // console.log("Lista favoritos", JSON.parse(favorites));
  const teste = JSON.parse(favorites);

  return (
    <div>
      <h1>Favoritos</h1>

      <div>{<Card data={teste} />}</div>
    </div>
  );
}

export default PageFavorites;
