import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header container mt-3 p-3">
      <div className="header row d-flex align-items-center">
        <div className="col-md-4">
          <h2>CLASSYADS</h2>
        </div>

        <div className="col-md-4 d-flex justify-content-around header_right_border">
          <a href="">Home</a>
          <a href="">Ads</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>

        <div className="col-md-4 d-flex justify-content-around align-items-center">
          <a href="">Login</a>
          <a href="">Register</a>
          <button className="btn btn-primary">+ Post an ad</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
