import React from "react";
import styles from "./Main.module.css";
import noPoster from "../../../assets/NoPoster.png";

const Main = (props) => {
  const movieCards = props.movieArr.map((el) => {
    return (
      <div className={styles.movie}>
        <div>
          <img
            className={styles.poster}
            src={el.Poster !== "N/A" ? el.Poster : noPoster}
            alt="..."
          />
        </div>
        <div className={styles.movieCard}>
          <p className={styles.name}>{el.Title}</p>
          <span className={styles.year}>{el.Year}</span>
          <span className={styles.runtime}>{el.Runtime}</span>
          <span className={styles.genre}>{el.Genre}</span>
          <p className={styles.plot}>{el.Plot}</p>
          <p className={styles.rating}>
            Rating{" "}
            <span
              className={
                el.imdbRating > 6 ? styles.ratingGreen : styles.ratingYellow
              }
            >
              {el.imdbRating}
            </span>
          </p>
          <div className={styles.trailer}>
            <a
              rel="noopener noreferrer"
              className={styles.trailerLink}
              target="_blank"
              href={`https://www.youtube.com/results?search_query=${el.Title}+${el.Year}+trailer`}
            >
              Watch Trailer
            </a>
          </div>
          <div className={styles.watch}>
            <a
              rel="noopener noreferrer"
              className={styles.watchLink}
              target="_blank"
              href={`https://www.imdb.com/title/${el.imdbID}`}
            >
              Watch Movie
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{movieCards}</div>
      <div className={styles.pagesContainer}>{props.pages}</div>
    </div>
  );
};
export default Main;
