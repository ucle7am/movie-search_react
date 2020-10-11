import React from "react";
import styles from "./Input.module.css";
const Input = ({ onChangeInput }) => {
  return <input maxLength={39} className={styles.input} type="text" />;
};
export default Input;
