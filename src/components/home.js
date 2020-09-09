import React from "react";

import ImageGrid from "./ImageGrid";
import Footer from "./footer";

const Home = (props) => {
  return (
    <>
      <div className="container-fluid">
        <ImageGrid
          data={props.myData}
          tdata={props.data}
          clickHandler={props.clickHandler}
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
