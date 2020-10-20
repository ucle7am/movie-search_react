import React, { useState } from "react";
import styles from "./MovieCard.module.css";
import noPoster from "../../assets/NoPoster.png";
import LoadingSpinner from "../basic/LoadingSpinner";

const MovieCard = ({
  Poster,
  Title,
  Year,
  Runtime,
  Genre,
  Plot,
  imdbRating,
  imdbID,
  setPopUpImg,
}) => {
  const [loaded, setLoaded] = useState(false);
  const redactedGenre = Genre ? Genre.split(",").slice(0, 2).join(","): Genre;
  return (
    <div className={styles.movie}>
      <div>
        <img
          style={loaded ? {} : { display: "none" }}
          style={Poster === "N/A" ? { cursor: "inherit" } : {}}
          onLoad={() => setLoaded(true)}
          onClick={Poster !== "N/A" ? () => setPopUpImg(Poster) : null}
          className={styles.poster}
          src={Poster !== "N/A" ? Poster : noPoster}
          alt="..."
        />
        <div
          style={!loaded ? {} : { display: "none" }}
          className={styles.loading}
        >
          <LoadingSpinner />
        </div>
      </div>
      <div className={styles.movieCard}>
        <h3 className={styles.name}>{Title}</h3>
        <span className={styles.year}>{Year}</span>
        <span className={styles.runtime}>{Runtime}</span>
        <span className={styles.genre}>{redactedGenre}</span>
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
