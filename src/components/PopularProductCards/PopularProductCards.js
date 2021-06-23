import React from "react";
import PopularProductCard from "../PopularProductCard/PopularProductCard";

const PopularProductCards = () => {
  return (
    <div className="PopularProductCards w-100 mb-5">
      <div className="row mb-4">
        <PopularProductCard
          isWidth={350}
          long={4}
          imageURL="https://images.unsplash.com/photo-1489686995744-f47e995ffe61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwbHV4dXJ5JTIwY2FyfGVufDB8fDB8fA"
          title="Red Luxury Car"
          text="Don 'st Brooklin, new york"
          category="Car & Vehicles"
        />
        <PopularProductCard
          isWidth={350}
          long={4}
          imageURL="https://images.unsplash.com/photo-1598649999298-3812df10c9ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMGdyYXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="I Phone x Gray"
          text="Don 'st Brooklin, new york"
          category="Electronics"
        />
        <PopularProductCard
          isWidth={350}
          long={4}
          imageURL="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Wooden Chair & Table"
          text="Don 'st Brooklin, new york"
          category="Furnitures"
        />
      </div>

      <div className="row">
        <PopularProductCard
          long={6}
          isWidth={550}
          imageURL="https://images.unsplash.com/photo-1598649999298-3812df10c9ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMGdyYXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="I Phone x Gray"
          text="Don 'st Brooklin, new york"
          category="Electronics"
        />
        <PopularProductCard
          long={6}
          isWidth={550}
          imageURL="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Red Luxury Car"
          text="Don 'st Brooklin, new york"
        />
      </div>
    </div>
  );
};

export default PopularProductCards;
