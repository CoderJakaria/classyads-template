import React from "react";
import "./OurBlogsCard.css";
import { Card } from "react-bootstrap";

const OurBlogsCard = ({ imageURL }) => {
  return (
    <div className="ourBlogsCard col-md-4">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <h3>Many People Selling Online</h3>
          <div className="ourBlogsCard_timestamp">
            by <span>Mark Spiker</span> • <span>Jan 18, 2019</span> •{" "}
            <span className="ourBlogsCard_news text-primary">News</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OurBlogsCard;
