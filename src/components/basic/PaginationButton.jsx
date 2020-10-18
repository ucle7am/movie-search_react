import React from "react";
import styles from "./PaginationButton.module.css";

const PaginationButton = ({
  i,
  setPage,
  getMovies,
  current,
  page,
  totalPages,
}) => {
  const onClick = () => {
    if (i === "<") {
      setPage(1);
      getMovies(current, 1);
    }
    if (i === ">") {
      setPage(totalPages);
      getMovies(current, totalPages);
    }
    if (page !== i + 1 && typeof i === "number") {
      setPage(i + 1);
      getMovies(current, i + 1);
    }
  };
  return (
    <button
      className={page === i + 1 ? styles.buttonActive : styles.button}
      onClick={onClick}
    >
      {i === "<" || i === ">" ? i : i + 1}
    </button>
  );
};
export default PaginationButton;
