'use client';
import React, { useState } from 'react';
import styles from './SectionTwo.module.css';
import RandomBlinks from '../Blinks';
const SectionTwo = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState('1');

  const handleOptionClick = (option: string) => {
    if (option === selectedOption) {
    }
    setSelectedOption(option);
  };

  return (
    <div className={styles.section}>
      <RandomBlinks />
      <h1>Услуги</h1>
      <div className={styles.content}>
        <div className={styles.variants}>
          <button className={styles.variant} onClick={() => handleOptionClick('1')}>
            Cмарт-контракты
          </button>
          <button className={styles.variant} onClick={() => handleOptionClick('2')}>
            Web3-приложения
          </button>
          <button className={styles.variant} onClick={() => handleOptionClick('3')}>
            Консультации
          </button>

          {popupVisible && (
            <div className={styles.popup}>
              {selectedOption === '1' && (
                <p>
                  У нас обширный опыт в разработке умных контрактов для широкого спектра
                  использования, включая токенизацию, децентрализованную финансовую (DeFi)
                  экономику, гемблинг, GameFi, DAO и многое другое. (статья какие бывают
                  смартконтракты)
                </p>
              )}
              {selectedOption === '2' && <p>Popup Content 2</p>}
              {selectedOption === '3' && <p>Popup Content 3</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
