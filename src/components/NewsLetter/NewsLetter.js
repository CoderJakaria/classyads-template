import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter bg-primary">
      <div className="container">
        <div className="newsLetter_wrapp row text-light">
          <div className=" col-md-6">
            <h4>Newsletter</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <input className="newsLetter_textField" placeholder="Email" />
            <div className="btn btn-light">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
