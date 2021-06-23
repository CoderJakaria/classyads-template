import React from "react";
import TrendingTodayCards from "../../components/TrendingTodayCards/TrendingTodayCards";
import "./TrendingToday.css";

const TrendingToday = () => {
  return (
    <div className="trendingToday container mb-5">
      <h2>Trending Today</h2>
      <TrendingTodayCards />
    </div>
  );
};

export default TrendingToday;
