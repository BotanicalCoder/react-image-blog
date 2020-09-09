import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-sm navbar-light bg-dark mb-2">
      <div className="navbar-brand ">
        <h2>
          <Link to="/" className="nav-link">
            KikPix
          </Link>
        </h2>
      </div>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item first">
          <Link to="imagepost" className="nav-link">
            imageposts
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
