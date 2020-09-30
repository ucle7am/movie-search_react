import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  let ref = React.createRef();
  const changeInput = () => {
    let text = ref.current.value;
    props.changeInput(text);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>movie search</h1>
      {props.isFetching ? (
        <p className={styles.loader}></p>
      ) : (
        <p className={styles.loader} style={{ visibility: "hidden" }}></p>
      )}
      <input
        className={styles.input}
        onChange={changeInput}
        ref={ref}
        type="text"
        value={props.inputValue}
      />
      <button className={styles.search} onClick={() => props.getMovies()}>
        SEARCH
      </button>
      <div className={styles.results}>
        {props.isEnglish ? (
          <p>showing results for movie '{props.inputValue}'</p>
        ) : (
          <p>write in english</p>
        )}
        {!props.isResponse ? <p>{props.error}</p> : <p></p>}
      </div>
    </div>
  );
};
export default Header;
