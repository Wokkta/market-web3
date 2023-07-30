'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './SectionThree.module.css';
import Image from 'next/image';
import RandomBlinks from '../Blinks';
const SectionThree = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <div className={styles.texts} data-aos="fade-right">
        <h1>О нас</h1>
        <p>
          Добро пожаловать в Web3 Smart Development! Мы - команда опытных разработчиков и
          блокчейн-энтузиастов, посвятивших себя созданию инновационных решений на стеке web3.{' '}
        </p>
        <p>
          Наша цель - создавать продукты высокого качества, которые масштабируемые, эффективные и
          удобные для пользователя.
        </p>
        <a href="#">Подробнее</a>
      </div>
      <Image
        src="/UFO.png"
        alt="UFO image"
        width={758}
        height={470}
        priority
        style={{ marginLeft: '60px' }}
        data-aos="fade-left"
      />
    </div>
  );
};

export default SectionThree;
