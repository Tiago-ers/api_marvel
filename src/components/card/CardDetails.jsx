import React from "react";

function CardDetails({ data, rota }) {
  console.log("details2", data);

  if (rota == "characters") {
    return data.map((characters) => (
      <div>
        <h4>{characters.description}</h4>
        <h4>Series</h4>

        {characters.series.items.map((item) => (
          <li>{item.name}</li>
        ))}

        <h4>Stories</h4>
        {characters.stories.items.map((name) => (
          <li>{name.name}</li>
        ))}
      </div>
    ));
  } else {
    return data.map((comics) => (
      <div>
        <h4>{comics.description}</h4>
        <h4>Series</h4>

        <li>{comics.series.name}</li>

        <h4>Stories</h4>
        {comics.stories.items.map((name) => (
          <li>{name.name}</li>
        ))}
      </div>
    ));
  }
}

export default CardDetails;
