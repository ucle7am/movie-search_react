import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps{
  changeInput(title: string) : void,
  inputValue: string,
}
const Input:React.FC<InputProps> = ({ changeInput, inputValue }) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
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
