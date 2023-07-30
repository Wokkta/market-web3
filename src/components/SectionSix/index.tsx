'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './SectionSix.module.css';
import LinkOne from '../UI/Links/LinkOne';
import RandomBlinks from '../Blinks';
const SectionSix = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <h1 data-aos="fade-down"> Модели работы с нами</h1>
      <div className={styles.variants} data-aos="fade-down">
        <div className={styles.variant} data-aos="zoom-in-left">
          <h2>Фиксированная цена</h2>
          <p>
            Модель Fixed Price предполагает определение заранее фиксированной стоимости проекта,
            которая не меняется в процессе выполнения работ. Мы заранее договариваемся о стоимости
            проекта, сроках его выполнения и требованиях к качеству работы. Эта модель часто
            используется для проектов с четкими и стабильными требованиями, когда возможно
            достаточно точно оценить трудоемкость и длительность работ.
          </p>
          <span>Методология разработки - Waterfall</span>
        </div>
        <div className={styles.variant} data-aos="zoom-in-right">
          <h2>Time & Material</h2>
          <p>
            Модель Time and Materials подразумевает оплату на основе фактически затраченного нами
            времени на разработку. При использовании этой модели требования к проекту могут меняться
            в процессе его реализации. Эта модель часто используется в проектах с менее четко
            определенными требованиями, где трудно предсказать точную стоимость и сроки выполнения.
            Time and Materials предоставляет большую гибкость и прозрачность в работе над проектом.
          </p>
          <span>Методология разработки - Agile, Scrum</span>
        </div>
      </div>

      <div className={styles.linkBox} data-aos="fade-down">
        <LinkOne text="Какой вариант выбрать?" />
      </div>
    </div>
  );
};

export default SectionSix;
