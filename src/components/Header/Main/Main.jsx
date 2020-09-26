import React from "react";
import Swiper from "../../Swiper/Swiper";

const Main = (props) => {
  console.log(props);
  const movieCards = props.movieArr.map((el) => {
    return (
      <div>
        <p>{el.Title}</p>
      </div>
    );
  });
  return (
    <div>
      {movieCards.length > 0 ? (
        <Swiper getMovies={props.getMovies} movieCards={movieCards} />
      ) : (
        <p>no movies</p>
      )}
    </div>
  );
};
export default Main;
