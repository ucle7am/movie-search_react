import React from "react";
import styles from "./MovieCard.module.css";
import noPoster from "../../assets/NoPoster.png";

const MovieCard = ({
  Poster,
  Title,
  Year,
  Runtime,
  Genre,
  Plot,
  imdbRating,
  imdbID,
}) => {
  return (
    <div className={styles.movie}>
      <div>
        <img
          className={styles.poster}
          src={Poster !== "N/A" ? Poster : noPoster}
          alt="..."
        />
      </div>
      <div className={styles.movieCard}>
        <p className={styles.name}>{Title}</p>
        <span className={styles.year}>{Year}</span>
        <span className={styles.runtime}>{Runtime}</span>
        <span className={styles.genre}>{Genre}</span>
        <p className={styles.plot}>{Plot}</p>
        <p className={styles.rating}>
          Rating{" "}
          <span
            className={
              imdbRating > 6 ? styles.ratingGreen : styles.ratingYellow
            }
          >
            {imdbRating}
          </span>
        </p>
        <div className={styles.trailer}>
          <a
            rel="noopener noreferrer"
            className={styles.trailerLink}
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${Title}+${Year}+trailer`}
          >
            Watch Trailer
          </a>
        </div>
        <div className={styles.watch}>
          <a
            rel="noopener noreferrer"
            className={styles.watchLink}
            target="_blank"
            href={`https://www.imdb.com/title/${imdbID}`}
          >
            Watch Movie
          </a>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
