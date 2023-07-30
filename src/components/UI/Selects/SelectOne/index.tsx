import { useState } from 'react';
import styles from './SelectOne.module.css';

const options = [
  { value: '50-100к', label: '50-100к' },
  { value: '100-300к', label: '100-300к' },
  { value: '300-500к', label: '300-500к' },
  { value: '+500к', label: '+500к' },
];

const SelectOne = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <label htmlFor="option" className={styles.label}>
        Бюджет ₽
      </label>
      <div className={styles.buttonGroup}>
        {options.map((option) => (
          <button
            key={option.value}
            className={`${styles.button} ${
              selectedOption === option.value ? styles.btnActive : styles.btn
            }`}
            onClick={() => handleOptionChange(option.value)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectOne;
