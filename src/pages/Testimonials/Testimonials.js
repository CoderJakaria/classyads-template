import React from "react";
import "./Testimonials.css";
import TestimonialsSlide from "../../components/TestimonialsSlide/TestimonialsSlide";

const Testimonials = () => {
  return (
    <div className="testimonials container mb-5">
      <h2 className="text-center text-primary">Testimonials</h2>
      <TestimonialsSlide />
    </div>
  );
};

export default Testimonials;
