import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";
const MovieList = ({ movieArr }) => {
  const movieCards = movieArr.map((el) => (
    <MovieCard key={el.imdbID} {...el} />
  ));
  return <div>{movieCards}</div>;
};
export default MovieList;
