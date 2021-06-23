import React from "react";
import { Button } from "react-bootstrap";
import OurBlogsCards from "../../components/OurBlogsCards/OurBlogsCards";
import "./OurBlogs.css";

const OurBlogs = () => {
  return (
    <div className="ourBlogs container mb-5">
      <div className="ourBlogs_headSec mb-5 text-center d-flex flex-column align-items-center">
        <h2 className="text-primary">Our Blog</h2>
        <p className="text-center">See Our Daily News & Updates</p>
      </div>

      <OurBlogsCards />

      <div className="d-flex justify-content-center">
        <Button variant="primary">View All Posts</Button>
      </div>
    </div>
  );
};

export default OurBlogs;
