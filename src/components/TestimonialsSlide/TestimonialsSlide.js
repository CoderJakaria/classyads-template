import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./TestimonialsSlide.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import TestimonialsSlideCard from "../TestimonialsSlideCard/TestimonialsSlideCard";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function TestimonialsSlide() {
  return (
    <div>
      <Swiper loop={true} navigation={true} className="mySwiper">
        <SwiperSlide>
          <TestimonialsSlideCard
            imageURL="https://preview.colorlib.com/theme/classyads/images/xperson_3.jpg.pagespeed.ic.cOJUXL1PUR.webp"
            name="John Smith"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
        minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
        excepturi earum unde iusto."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSlideCard
            imageURL="https://preview.colorlib.com/theme/classyads/images/xperson_5.jpg.pagespeed.ic.4YapupvOUp.webp"
            name="Bruce Rogers"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
        minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
        excepturi earum unde iusto."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSlideCard
            imageURL="https://preview.colorlib.com/theme/classyads/images/xperson_4.jpg.pagespeed.ic.X36VI035mo.webp"
            name="Robert Spears"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
        minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
        excepturi earum unde iusto."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSlideCard
            imageURL="https://preview.colorlib.com/theme/classyads/images/xperson_2.jpg.pagespeed.ic.zY-y25qZs4.webp"
            name="Christine Aguiler"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
        minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
        excepturi earum unde iusto."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSlideCard
            imageURL="https://images.unsplash.com/photo-1569769107543-e0f61bab8e02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RldmUlMjBqb2JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            name="Steve Jobs"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
        minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
        excepturi earum unde iusto."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
