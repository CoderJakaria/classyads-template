import React from "react";
import "./PopularProductCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const PopularProductCard = ({
  long,
  isWidth,
  imageURL,
  category,
  title,
  text,
}) => {
  return (
    <div
      className={`popularProductCard col-md-${long} mr-auto position-relative`}
      style={{ width: `${isWidth}px` }}
    >
      <img
        src={imageURL}
        alt={title}
        className="position-absolute top-0 left-0 w-100 h-100"
      />
      <span>{category}</span>
      <div className="d-flex justify-content-between align-items-center position-absolute bottom-0 w-100 p-4 popcard__flexer">
        <div className="">
          <h2 className="fs-4 text-light">{title}</h2>
          <p className="text-light">{text}</p>
        </div>
        <FavoriteIcon className="fs-1 text-light" />
      </div>
    </div>
  );
};

export default PopularProductCard;
