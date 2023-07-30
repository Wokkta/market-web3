'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './SectionFive.module.css';
import Cards from '../UI/Cards';
import RandomBlinks from '../Blinks';
const SectionFive = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <h1 data-aos="fade-left"> Наши преимущества</h1>
      <div className={styles.gallery} data-aos="fade-left">
        <Cards />
      </div>
    </div>
  );
};

export default SectionFive;
