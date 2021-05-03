import { useState, useEffect } from 'react';
import Page from 'react-page-loading';
// import Pagination from "react-js-pagination";
import axios from 'axios';
import Search from '../find/Search';
import Card from '../card/Card';

function Characters() {
  const [caracter, setCaracter] = useState([]);
  const [names, setNames] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://gateway.marvel.com/v1/public/characters?offset=100&ts=1&apikey=cc85a34058dbf80318bc2f9aaf4dc2da&hash=98d5fff5ed3b0faa7000ab839173a447'
      )
      .then((response) => {
        setCaracter(response.data.data.results);
      });
  }, []);

  //filtra o card por nome
  function searchName(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(names) > -1);
  }

  return (
    <div>
      <Page loader={'bar'} color={'#A9A9A9'} size={10} number={2}>
        <Search onChange={(e) => setNames(e.target.value)} />
        <Card data={searchName(caracter)} />
      </Page>
    </div>
  );
}

export default Characters;
