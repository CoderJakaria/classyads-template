import React from "react";
import Footer from "./pages/Footer/Footer";

import Brances from "./pages/home/brances/Brances";
import Home from "./pages/home/Home";
import OurBlogs from "./pages/OurBlogs/OurBlogs";
import PopularProduct from "./pages/PopularProduct/PopularProduct";
import Testimonials from "./pages/Testimonials/Testimonials";
import TrendingToday from "./pages/TrendingToday/TrendingToday";

const App = () => {
  return (
    <div className="app">
      <Home />
      <Brances />
      <PopularProduct />
      <TrendingToday />
      <Testimonials />
      <OurBlogs />
      <Footer />
    </div>
  );
};

export default App;
