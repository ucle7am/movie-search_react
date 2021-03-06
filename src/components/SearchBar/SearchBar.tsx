import React from "react";
import Button from "../basic/Button";
import Input from "../basic/Input";
import LoadingSpinner from "../basic/LoadingSpinner";
import styles from "./SearchBar.module.css";

interface SearchBarProps{
  isFetching: boolean,
  changeInput(title: string) : void,
  inputValue: string,
  getNewMovies(title: string) : void,
  setCurrentSearch(title: string) : void,
  current: string,
}
const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({
    isFetching,
    changeInput,
    inputValue,
    getNewMovies,
    setCurrentSearch,
    current,
  }) => {
    const submit = (e: React.FormEvent) => {
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
        {current.length > 0 ? (
          <p className={styles.p}>Showing results for '{current}'</p>
        ) : (
          <p className={styles.p}>Search something ^_^</p>
        )}
      </header>
    );
  }
);
export default SearchBar;
