import handleFavorite from '..//utils/addFavoritos';

/**
 *  Este componente salva lista de favoritos no localStorage
 */

import React from 'react';

function AddFavorite({ id, name, title, image }) {
  return (
    <div>
      <button onClick={() => handleFavorite({ id, name, title, image })}>
        Add Favorite
      </button>
    </div>
  );
}

export default AddFavorite;
