import React, { ChangeEvent } from 'react';
import styles from './InputOne.module.css';
interface InputOneProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  width: number;
  height: number;
}
const InputOne: React.FC<InputOneProps> = ({ value, handleChange, placeholder, width, height }) => {
  return (
    <input
      type="text"
      id="inputValue"
      value={value}
      onChange={handleChange}
      className={styles.inputOne}
      placeholder={placeholder}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default InputOne;
