import React from "react";
import MovieCard from "../MovieCard/MovieCard";
const MovieList = ({ movieArr, setPopUpImg }) => {
  const movieCards = movieArr.map((el) => (
    <MovieCard key={el.imdbID} {...el} setPopUpImg={setPopUpImg} />
  ));
  return <div>{movieCards}</div>;
};
export default MovieList;
