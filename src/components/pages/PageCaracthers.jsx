import { useState, useEffect } from "react";
import Page from "react-page-loading";
// import Pagination from "react-js-pagination";
import axios from "axios";
import RenderData from "../card/Card";

function Characters() {
  const [caracter, setCaracter] = useState([]);
  // const [activePage, setActivePage] = useState(caracter.slice(0, 20));

  useEffect(() => {
    axios
      .get(
        "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=cc85a34058dbf80318bc2f9aaf4dc2da&hash=98d5fff5ed3b0faa7000ab839173a447"
      )
      .then((response) => {
        setCaracter(response.data.data.results);
      });
  }, []);

  // console.log("Array", caracter);

  return (
    <div>
      <Page loader={"bar"} color={"#A9A9A9"} size={10} number={2}>
        <RenderData data={caracter} />
      </Page>
    </div>
  );
}

export default Characters;
