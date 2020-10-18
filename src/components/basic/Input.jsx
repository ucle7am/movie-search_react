import React from "react";
import styles from "./Input.module.css";
const Input = ({ changeInput, inputValue }) => {
  const change = (e) => {
    changeInput(e.target.value);
  };
  return (
    <input
      placeholder="Write in English"
      pattern={"^[a-zA-Z0-9$@$!%*?&#^-_. +]+$"}
      value={inputValue}
      onChange={change}
      maxLength={20}
      className={styles.input}
      type="text"
    />
  );
};
export default Input;
