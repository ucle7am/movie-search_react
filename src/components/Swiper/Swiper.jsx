import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import React from "react";

export default (props) => {
  let slides = props.movieCards.map((el) => {
    return <SwiperSlide>{el}</SwiperSlide>;
  });
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onReachEnd={() => {
        console.log("end");
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides}
    </Swiper>
  );
};
