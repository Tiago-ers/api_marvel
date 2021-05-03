import { useState, useEffect } from 'react';
import Page from 'react-page-loading';
import axios from 'axios';
import Search from '../find/Search';
import RenderData from '../card/Card';

function PageComics() {
  const [comics, setComics] = useState([]);
  const [titles, setTitles] = useState('');

  useEffect(() => {
    axios
      .get(
        'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=cc85a34058dbf80318bc2f9aaf4dc2da&hash=98d5fff5ed3b0faa7000ab839173a447'
      )
      .then((response) => {
        setComics(response.data.data.results);
      });
  }, []);

  //filtra o card por nome
  function searchName(rows) {
    return rows.filter((row) => row.title.toLowerCase().indexOf(titles) > -1);
  }

  console.log('Comics', comics);
  return (
    <div>
      <Page loader={'bar'} color={'#A9A9A9'} size={10} number={2}>
        <Search
          className='find-card'
          onChange={(e) => setTitles(e.target.value)}
        />
        <RenderData data={searchName(comics)} />
      </Page>
    </div>
  );
}
export default PageComics;
