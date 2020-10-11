import React from "react";
import styles from "./Main.module.css";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";

const Main = (props) => {
  return (
    <div>
      <MovieList {...props} />
      <Pagination />
    </div>
  );
};
export default Main;
