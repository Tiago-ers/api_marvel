import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Page from 'react-page-loading';
import axios from 'axios';
import CardDetails from '../card/CardDetails';
import Card from '../card/Card';
import './PageDetails.css';

function PageDetails(props) {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  // console.log("ID", id);
  const { rota } = props.location.rotaOrigem;
  // console.log("Path", props.location.rotaOrigem);

  const URL_BASE_1 = 'http://gateway.marvel.com/v1/public/';
  const URL_BASE_2 =
    '?ts=1&apikey=cc85a34058dbf80318bc2f9aaf4dc2da&hash=98d5fff5ed3b0faa7000ab839173a447';

  const url_req = `${URL_BASE_1}${rota}/${id}${URL_BASE_2}`;
  // console.log("URL", url_req);

  useEffect(() => {
    axios.get(url_req).then((response) => {
      setDetails(response.data.data.results);
    });
  }, [url_req]);

  return (
    <div className='container-details'>
      <Page loader={'bar'} color={'#A9A9A9'} size={10} number={2}>
        <Card data={details} />
        <div>
          <p>
            <CardDetails data={details} rota={rota} />
          </p>
        </div>
      </Page>
    </div>
  );
}

export default PageDetails;
