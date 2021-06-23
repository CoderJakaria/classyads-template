import React from "react";
import "./TrendingTodayCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const TrendingTodayCard = ({ imageURL, category, title, text, reviews }) => {
  return (
    <>
      <div className="trendingTodayCard col-md-6">
        <img src={imageURL} />
        <div>
          <div className="trendingTodayCard__details">
            <div className="trendingTodayCard__category d-flex justify-content-between align-items-center">
              <span>{category}</span>
              <FavoriteIcon />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="trendingTodayCard__category_rating">
              {Array(reviews)
                .fill()
                .map(() => (
                  <>⭐</>
                ))}{" "}
              ({reviews} Reviews)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingTodayCard;
