import React from "react";
import "./FeaturedAdCard.css";
import { Button, Card } from "react-bootstrap";

const FeaturedAdCard = ({ imageURL, category, title, text, reviews }) => {
  return (
    <div className="col-md-2">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={imageURL} style={{ height: "150px" }} />
        <Card.Body className=" p-4">
          <div className="d-flex justify-content-between">
            <span className="featuredad__span_1">{category}</span>{" "}
            <span>❤</span>
          </div>
          <Card.Title className="text-primary fs-5">{title}</Card.Title>
          <Card.Text className=" mb-2">{text}</Card.Text>
          {Array(reviews)
            .fill()
            .map(review => {
              return <span>⭐</span>;
            })}
          ({reviews} reviews)
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedAdCard;
