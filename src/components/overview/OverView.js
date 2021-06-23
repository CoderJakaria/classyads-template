import React from "react";
import "./OverView.css";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import BusinessIcon from "@material-ui/icons/Business";
import BallotIcon from "@material-ui/icons/Ballot";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";

import OverViewCard from "../overview__card/OverViewCard";

const OverView = () => {
  return (
    <div className="overview w-100">
      <div className="container">
        <div className="row bg-light">
          <OverViewCard
            Icon={HomeWorkIcon}
            text="React Estate"
            total="3, 921"
          />
          <OverViewCard
            Icon={LibraryBooksIcon}
            text="Books & Magazines"
            total="328"
          />
          <OverViewCard Icon={BusinessIcon} text="Furnitures" total="120" />
          <OverViewCard Icon={BallotIcon} text="Electronics" total="32,023" />
          <OverViewCard
            Icon={AirportShuttleIcon}
            text="Cars & Vehicles"
            total="29, 221"
          />
          <OverViewCard Icon={LocalPizzaIcon} text="Others" total="218" />
        </div>
      </div>
    </div>
  );
};

export default OverView;
