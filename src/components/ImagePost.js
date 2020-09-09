import React from "react";
import { Link } from "react-router-dom";
import ImageReview from "./ImageReview";
import ImageAuthor from "./ImageAuthor";

const ImagePost = (props) => {
  const { img, comments, id } = props.myData;
 

  return (
    <>
      <div className="container">
        <div className="row">
          <img src={img} alt="phones" className="img-fluid col-sm-11 ml-0" />
        </div>
        <div className="container-fluid">
          <button className="btn btn-dark mt-2 mb-2 ">like</button>
          <button className="btn btn-dark ml-2  mt-2 mb-2 mr-auto ">
            share
          </button>
        </div>
      </div>
      <ImageAuthor />
      <ImageReview comment={comments} formHandler={props.formHandler} id={id} />
      <div className="container" id="bottom">
        <button
          className="btn btn-dark mt-2 mb-2"
          onClick={() => props.prevHandler(id)}
        >
          {" "}
          prev post{" "}
        </button>

        <button
          className="btn btn-dark ml-5 mt-2 mb-2"
          onClick={() => props.nextHandler(id)}
        >
          {" "}
          next post{" "}
        </button>
      </div>
    </>
  );
};

export default ImagePost;
