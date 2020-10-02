import React from "react";
import styles from "./Header.module.css";

const Header = ({
  hasResponse,
  error,
  getMovies,
  isFetching,
  inputValue,
  changeInput,
  isEnglish,
}) => {
  let ref = React.createRef();
  const onChangeInput = () => {
    let text = ref.current.value;
    changeInput(text);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>movie search</h1>
      {isFetching ? (
        <p className={styles.loader}></p>
      ) : (
        <p className={styles.loader} style={{ visibility: "hidden" }}></p>
      )}
      <input
        maxLength={39}
        className={styles.input}
        onChange={onChangeInput}
        ref={ref}
        type="text"
        value={inputValue}
      />
      <button className={styles.search} onClick={() => getMovies()}>
        SEARCH
      </button>
      {!hasResponse ? (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      ) : (
        <div className={styles.results}>
          {isEnglish ? (
            <p>showing results for movie '{inputValue}'</p>
          ) : (
            <p>write in english</p>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
