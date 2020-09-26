import React from "react";
import Swiper from "../../Swiper/Swiper";

const Main = (props) => {
  const movieCards = props.movieArr.map((el) => {
    return (
      <div>
        <p>{el.Title}</p>
      </div>
    );
  });
  return (
    <div>
      <Swiper movieCards={movieCards} />
    </div>
  );
};
export default Main;
