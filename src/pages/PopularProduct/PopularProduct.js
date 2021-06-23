import React from "react";
import PopularProductCards from "../../components/PopularProductCards/PopularProductCards";
import "./PopularProduct.css";

const PopularProduct = () => {
  return (
    <div className="container">
      <div className="popProduct__headDt mb-5 text-center d-flex flex-column align-items-center">
        <h2 className="text-primary">Popular Product</h2>
        <p className="popProduct__headPara text-black-50 text-center">
          Lorem Ipsum Dolor Sit Amet
        </p>
      </div>

      <PopularProductCards />
    </div>
  );
};

export default PopularProduct;
