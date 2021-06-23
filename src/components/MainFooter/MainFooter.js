import React from "react";
import "./MainFooter.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const MainFooter = () => {
  return (
    <div className="mainFooter">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="text-light mb-3">About</p>
            <p className=" text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident rerum unde possimus molestias dolorem fuga, illo quis
              fugiat!
            </p>
          </div>

          <div className="col-md-3">
            <p className="text-light mb-3">Navigation</p>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact us</a>
          </div>

          <div className="col-md-3">
            <p className="text-light mb-3">Follow us</p>
            <div className="mainFooter_socials d-flex">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="mainFooter_searchBox col-md-3">
            <input type="text" placeholder="Search Products..." />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
      <hr className="text-muted mb-4" />
      <p className="text-muted text-center">
        Copyright ©2021 All rights reserved | This is made with ❤ by
        CoderJakaria
      </p>
    </div>
  );
};

export default MainFooter;
