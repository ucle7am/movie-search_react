import React from "react";
import styles from "./Input.module.css";
const Input = ({ changeInput, inputValue }) => {
  const change = (e) => {
    changeInput(e.target.value);
  };
  return (
    <input
      value={inputValue}
      onChange={change}
      maxLength={39}
      className={styles.input}
      type="text"
    />
  );
};
export default Input;
