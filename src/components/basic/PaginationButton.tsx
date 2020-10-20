import React from "react";
import styles from "./PaginationButton.module.css";

interface InputProps{
  i: any,
  setPage(title:number): void,
  getMovies(title:string,next:number): void,
  current:string,
  page:number,
  totalPages:number
}

const PaginationButton:React.FC<InputProps> = ({
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
    if (page !== i && typeof i === "number") {
      setPage(i);
      getMovies(current, i);
    }
  };
  return (
    <button
      className={page === i ? styles.buttonActive : styles.button}
      onClick={onClick}
    >
      {i}
    </button>
  );
};
export default PaginationButton;
