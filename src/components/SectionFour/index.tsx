'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './SectionFour.module.css';
import Image from 'next/image';
import RandomBlinks from '../Blinks';
const SectionFour = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <div className={styles.item} data-aos="fade-right">
        <Image
          src="/Star.png"
          alt="Star image"
          width={40}
          height={72}
          priority
          style={{ marginLeft: '60px' }}
        />
        <div className={styles.numberBlock}>
          <h1>150+</h1>
          <p>успешно завершенных проектов</p>
        </div>
      </div>
      <div className={styles.item} data-aos="fade-right">
        <Image
          src="/Star.png"
          alt="Star image"
          width={40}
          height={72}
          priority
          style={{ marginLeft: '60px' }}
        />
        <div className={styles.numberBlock}>
          <h1>15</h1>
          <p>лет опыта</p>
        </div>
      </div>
      <div className={styles.item} data-aos="fade-right">
        <Image
          src="/Star.png"
          alt="Star image"
          width={40}
          height={72}
          priority
          style={{ marginLeft: '60px' }}
        />
        <div className={styles.numberBlock} data-aos="fade-right">
          <h1>20+</h1>
          <p>профессионалов в штате</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
