import React from "react";
import Page from "react-page-loading";

function Home() {
  return (
    <div>
      <Page loader={"bar"} color={"#A9A9A9"} size={10} number={2}>
        Home
      </Page>
    </div>
  );
}

export default Home;
