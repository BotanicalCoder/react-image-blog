import React from "react";
import { Link } from "react-router-dom";

const ImageGrid = (props) => {
  return (
    <div className="container-fluid ">
      <div className="row center-image mr-1">
        {" "}
        <Link to="/imagepost">
          {" "}
          <img
            src="../img/img-1.jpg"
            alt="nature scenery"
            className="img-fluid"
            onClick={() => {
              props.clickHandler(0);
            }}
          />{" "}
        </Link>
      </div>

      <div className="row">
        <div className="imgRow first">
          <Link to="/imagepost">
            {" "}
            <img
              src="../img/img-2.jpg"
              alt="nature scenery"
              className="img-fluid col-lg-3 col-sm-3"
              onClick={() => {
                props.clickHandler(1);
              }}
            />
          </Link>
          <Link to="/imagepost">
            {" "}
            <img
              src="../img/img-3.jpg"
              alt="nature scenery"
              height="100px"
              width="100px"
              className="img-fluid col-lg-3 col-sm-3"
              onClick={() => {
                props.clickHandler(2);
              }}
            />
          </Link>
          <Link to="/imagepost">
            <img
              src="../img/img-4.jpg"
              alt="nature scenery"
              className="img-fluid col-lg-3 col-sm-3"
              onClick={() => {
                props.clickHandler(3);
              }}
            />{" "}
          </Link>

          <Link to="/imagepost">
            {" "}
            <img
              src="../img/img-5.jpg"
              alt="nature scenery"
              className="img-fluid col-lg-3 col-sm-3"
              onClick={() => {
                props.clickHandler(4);
              }}
            />{" "}
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="imgRow ">
          <Link to="/imagepost">
            {" "}
            <img
              src="../img/img-6.jpg"
              alt="nature scenery"
              className="img-fluid col-lg-4 col-sm-4 mb-2"
              onClick={() => {
                props.clickHandler(5);
              }}
            />
          </Link>
          <Link to="/imagepost">
            <img
              src="../img/img-7.jpg"
              alt="nature scenery"
              className="img-fluid col-lg-4 col-sm-4 mb-2"
              onClick={() => {
                props.clickHandler(6);
              }}
            />
          </Link>
          <Link to="/imagepost">
            {" "}
            <img
              src="../img/img-8.jpg"
              alt="nature scenery"
              className="img-fluid col-lg-4 col-sm-4 mb-2"
              onClick={() => {
                props.clickHandler(7);
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
