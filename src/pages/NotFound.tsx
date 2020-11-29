import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <img src={logo} alt="logo" />
      <div className="title-1 bold bottom-margin">404 - Not Found</div>
      <div className="title-2 bottom-margin">
        Sorry, The page you are looking for does not exist
      </div>
      <div className="title-2 bottom-margin">
        You can always go back to the
        <span>
          <Link className="link" to="/car-search">
            {" "}
            homepage
          </Link>
        </span>
        .
      </div>
    </div>
  );
};

export default NotFound;
