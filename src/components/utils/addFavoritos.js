function addFavorite(data) {
  // descontruindo as props
  const { id, name, title, image } = data;
  // console.log("IMAGE", image.extension);

  // Verifica se já existe o localStorage (favoritos)
  // Caso não exista cria um novo array (exitsFavorite)
  let exitsFavorite = JSON.parse(localStorage.getItem('favoritos'));
  if (exitsFavorite == null) exitsFavorite = [];

  // Objeto a ser gravado no localStorage
  const objFavorite = {
    id,
    name,
    title,
    thumbnail: { path: image.path, extension: image.extension },
  };

  // Verifica se o item já foi salvo no localStorage
  let verify = exitsFavorite.map((item) => item.id);
  // Grava no localStorage
  if (!verify.includes(id)) {
    exitsFavorite.push(objFavorite);
    localStorage.setItem('favoritos', JSON.stringify(exitsFavorite));
  }
}

export default addFavorite;
