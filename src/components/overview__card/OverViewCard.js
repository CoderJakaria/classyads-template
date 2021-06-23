import React from "react";
import "./OverViewCard.css";

const OverViewCard = ({ Icon, text, total }) => {
  return (
    <div className="overviewCard col-lg-2 p-0">
      <a href="#">
        <div className="overviewCard__card bg-light text-center">
          <Icon className="fs-1" />
          <p className="mb-2 text-capitalize m-2">{text}</p>
          <span>{total}</span>
        </div>
      </a>
    </div>
  );
};

export default OverViewCard;
