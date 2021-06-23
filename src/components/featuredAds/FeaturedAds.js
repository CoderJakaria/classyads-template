import React, { useState } from "react";
import "./FeaturedAds.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import FeaturedAdCard from "../featuredAd_card/FeaturedAdCard";

const FeaturedAds = () => {
  const [responsibeCetegory] = useState({
    0: { items: 1 },
    600: { items: 1 },
    800: { items: 2 },
    1000: { items: 2 },
    1200: { items: 3 },
  });

  return (
    <div className="container position-relative pb-5">
      <h3 className="mb-4">Featured Ads</h3>

      <OwlCarousel
        className="row owl-theme"
        loop
        nav
        stagePadding={100}
        autoplay
        autoplayTimeout={5000}
        margin={7}
        responsive={responsibeCetegory}
        dots={false}
      >
        <div class="item">
          <FeaturedAdCard
            imageURL="https://images.unsplash.com/photo-1489686995744-f47e995ffe61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwbHV4dXJ5JTIwY2FyfGVufDB8fDB8fA"
            title="Red Luxury Car"
            text="Don 'st Brooklin, new york"
            category="Car & Vehicles"
            reviews={5}
          />
        </div>
        <div class="item">
          <FeaturedAdCard
            imageURL="https://images.unsplash.com/photo-1598649999298-3812df10c9ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMGdyYXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="I Phone x Gray"
            text="Don 'st Brooklin, new york"
            category="Electronics"
            reviews={5}
          />
        </div>
        <div class="item">
          <FeaturedAdCard
            imageURL="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Wooden Chair & Table"
            text="Don 'st Brooklin, new york"
            category="Furnitures"
            reviews={2}
          />
        </div>
        <div class="item">
          <FeaturedAdCard
            imageURL="https://images.unsplash.com/photo-1598649999298-3812df10c9ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMGdyYXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="I Phone x Gray"
            text="Don 'st Brooklin, new york"
            category="Electronics"
            reviews={3}
          />
        </div>
        <div class="item">
          <FeaturedAdCard
            imageURL="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="Red Luxury Car"
            text="Don 'st Brooklin, new york"
            reviews={1}
          />
        </div>
        <div class="item">
          <FeaturedAdCard
            imageURL="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title="I Phone x Gray"
            text="Don 'st Brooklin, new york"
            category="Electronics"
            reviews={4}
          />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default FeaturedAds;
