import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: "url(/bg.jpg)" }}>
      <Header />

      <div className="home__located container mt-5">
        <h1 className="text-center text-light">
          Largest Classifieds In The World
        </h1>
        <p className="text-center home__para">
          You can buy, sell anything you want.
        </p>

        <div className="home__mid row p-4  d-flex align-items-center">
          <div className="col-md-3">
            <input type="text" placeholder="What are you looking for ?" />
          </div>

          <div className="col-md-3">
            <input type="text" placeholder="Location" />
          </div>

          <div className="col-md-3">
            <select>
              <option value="">All Categories</option>
              <option value="">React Developer</option>
              <option value="">Machine Learning</option>
            </select>
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
