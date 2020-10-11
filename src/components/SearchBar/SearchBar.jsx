import React from "react";
import Button from "../basic/Button";
import Input from "../basic/Input";
import LoadingSpinner from "../basic/LoadingSpinner";
import styles from "./SearchBar.module.css";
const SearchBar = ({
  isFetching,
  changeInput,
  inputValue,
  getNewMovies,
  setCurrentSearch,
}) => {
  const submit = (e) => {
    e.preventDefault();
    setCurrentSearch(inputValue);
    getNewMovies(inputValue);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>MOVIE SEARCH</h1>
      {isFetching ? (
        <div className={styles.fetch}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.fetch} />
      )}
      <form onSubmit={submit} className={styles.form}>
        <Input changeInput={changeInput} inputValue={inputValue} />
        <Button />
      </form>
    </header>
  );
};
export default SearchBar;
