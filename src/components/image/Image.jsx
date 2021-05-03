import React from 'react';

function Image({ img, alt }) {
  // console.log("image favoritos", img);
  return (
    <div>
      <img src={img.path + '.jpg'} alt={alt} />
    </div>
  );
}

export default Image;
