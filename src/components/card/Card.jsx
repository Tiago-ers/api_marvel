/**
 * Componente Card:
 * Processa/renderiza as informações para as Pages:
 * PageCharacters, PageComics e PageDetails.
 *
 * Componente Image.
 * Processa/renderiza imagens.
 *
 * props data:
 * Caso tenha a propriedade (data.name), sua origem é da PageCaracthers.
 * Caso tenha a propriedade (data.title), sua origem é da PageComics.
 *
 * Link:
 * A imagem e o título da imagem são links para a PageDetails.
 * Ao Clicar na imagem ou no titulo obtem o id do card.
 * pathname: contém o caminha para a PageDetails com o parametro id.
 * rotaOrigem: contém o nome de origem da rota.
 *
 **/

import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/Image';
import AddFavorite from '../favorite/Favorite';
// import FindCard from '../find/FindCard';

import './Card.css';

function RenderData({ data }) {
  if (data == null) {
    return <div>Sem informação</div>;
  }
  return data.map((item) => {
    if (item.name) {
      //PageCharacters
      return (
        <div key={item.id} className='card'>
          <Link
            to={{
              pathname: `/details/${item.id}`,
              rotaOrigem: { rota: 'characters' },
            }}
          >
            <Image img={item.thumbnail} alt={item.name} />
          </Link>
          <div className='container'>
            <h4>
              <Link
                to={{
                  pathname: `/details/${item.id}`,
                  rotaOrigem: { rota: 'characters' },
                }}
              >
                {item.name}
              </Link>
            </h4>
          </div>
          <AddFavorite id={item.id} name={item.name} image={item.thumbnail} />
        </div>
      );
    } else {
      //PageComics
      return (
        <div key={item.id} className='card'>
          <Link
            to={{
              pathname: `/details/${item.id}}`,
              rotaOrigem: { rota: 'comics' },
            }}
          >
            <Image img={item.thumbnail} alt={item.title} />
          </Link>
          <div className='container'>
            <h4>
              <Link
                to={{
                  pathname: `/details/${item.id}}`,
                  rotaOrigem: { rota: 'comics' },
                }}
              >
                {item.title}
              </Link>
            </h4>
          </div>
          <AddFavorite id={item.id} title={item.title} image={item.thumbnail} />
        </div>
      );
    }
  });
}

export default RenderData;
