import React from "react";
import styles from "./Main.module.css";

import MovieCard from "../../MovieCard/MovieCard";

const Main = ({ movieArr, pages }) => {
  const movieCards = movieArr.map((el) => <MovieCard {...el} />);
  return (
    <div>
      <div className={styles.moviesContainer}>{movieCards}</div>
      <div className={styles.pagesContainer}>{pages}</div>
    </div>
  );
};
export default Main;
