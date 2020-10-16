import React from "react";
import styles from "./Main.module.css";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";

const Main = ({ movieArr, ...props }) => {
  console.log(movieArr);
  return (
    <div>
      {props.hasResponse && !props.isFetching ? (
        <>
          <MovieList movieArr={movieArr} {...props} />
          <Pagination {...props} />
        </>
      ) : (
        <p className={styles.error}>{props.error}</p>
      )}
    </div>
  );
};
export default Main;
