'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './Steps.module.css';
import Image from 'next/image';
import RandomBlinks from '../Blinks';

import ButtonOneMin from '../UI/Buttons/ButtonOneMin';
const Steps = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <h1 data-aos="zoom-in">Этапы работы</h1>
      <Image
        data-aos="zoom-in"
        width={1129}
        height={1832}
        src={'/BGSteps.png'}
        alt="steps background"
        style={{ position: 'absolute', zIndex: 0 }}
      />
      <div className={styles.steps} data-aos="zoom-in">
        <div className={styles.step} data-aos="zoom-in">
          <div className={styles.count}>
            <h1>01</h1>
            <Image width={230} height={230} src={'/Ellipse.png'} alt="number background" />
          </div>

          <div className={styles.texts}>
            <h2>NDA</h2>
            <ul>
              <li>Подписываем соглашения до старта разработки</li>
              <li>Подписываем соглашения до старта разработки</li>
              <li>Подписываем соглашения до старта разработки</li>
            </ul>
          </div>
        </div>
        <div className={styles.step} data-aos="zoom-in">
          <div className={styles.count}>
            <h1>02</h1>
            <Image width={230} height={230} src={'/Ellipse.png'} alt="number background" />
          </div>
          <div className={styles.texts}>
            <h2>Создание концепта</h2>
            <ul>
              <li>
                Изучение потребностей бизнеса заказчика, оценка сроков и стоимости разработки ПО
              </li>
              <li>Создание технического задания, согласование с заказчиком</li>
              <li>Разработка дизайн-концепции</li>
            </ul>
          </div>
        </div>
        <div className={styles.step} data-aos="zoom-in">
          <div className={styles.count}>
            <h1>03</h1>
            <Image width={230} height={230} src={'/Ellipse.png'} alt="number background" />
          </div>
          <div className={styles.texts}>
            <h2>Разработка и тестирование</h2>
            <ul>
              <li>Разработка ПО</li>
              <li>Тестирование</li>
              <li>Демонстрация заказчику</li>
              <li>Заключительные доработки</li>
              <div style={{ marginTop: '16px' }}>
                <ButtonOneMin text="Подробнее" />
              </div>
            </ul>
          </div>
        </div>
        <div className={styles.step} data-aos="zoom-in">
          <div className={styles.count}>
            <h1>04</h1>
            <Image width={230} height={230} src={'/Ellipse.png'} alt="number background" />
          </div>
          <div className={styles.texts}>
            <h2>Поддержка</h2>
            <ul>
              <li>Внедрение ПО</li>
              <li>Обучение пользователей</li>
              <li>Техническое сопровождение</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
