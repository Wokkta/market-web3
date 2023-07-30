import React from 'react';
import styles from './SectionOne.module.css';
import ButtonOne from '../UI/Buttons/ButtonOne';
import Image from 'next/image';
import RandomBlinks from '../Blinks';

const SectionOne: React.FC = () => {
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <div className={styles.texts}>
        <h1>{`Разрабатываем смартконтракты ${`\n`}и WEB3 приложения`}</h1>
        <p>
          Эксперты в разработке блокчейн-решений, смарт-контрактов и децентрализованных приложений
        </p>
        <ButtonOne text="Оставить заявку" />
      </div>
      {
        <Image
          className={styles.planet}
          src="/Planet.png"
          alt="Cool image"
          width={918.16}
          height={767.36}
        />
      }
    </div>
  );
};

export default SectionOne;
