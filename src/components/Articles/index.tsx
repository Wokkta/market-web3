'use client';
import React, { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Articles.module.css';
import Image from 'next/image';

import ButtonOneMin from '../UI/Buttons/ButtonOneMin';
import ButtonTwo from '../UI/Buttons/ButtonTwo';
import RandomBlinks from '../Blinks';

const articlesData = [
  {
    id: 1,
    title: 'Веб-приложение для Blockchain продукта',
    content:
      'Мы обязуемся предоставлять отличный сервис нашим клиентам. Мы уделяем время на понимание потребностей наших клиентов и сотрудничаем с ними для разработки индивидуальных решений, соответствующих их конкретным требованиям.',
  },
  {
    id: 2,
    title: 'Веб-приложение для Blockchain продукта',
    content:
      'Мы обязуемся предоставлять отличный сервис нашим клиентам. Мы уделяем время на понимание потребностей наших клиентов и сотрудничаем с ними для разработки индивидуальных решений, соответствующих их конкретным требованиям.',
  },
  {
    id: 3,
    title: 'Веб-приложение для Blockchain продукта',
    content:
      'Мы обязуемся предоставлять отличный сервис нашим клиентам. Мы уделяем время на понимание потребностей наших клиентов и сотрудничаем с ними для разработки индивидуальных решений, соответствующих их конкретным требованиям.',
  },
  {
    id: 4,
    title: 'Заголовок статьи 10',
    content: 'Содержимое статьи 1',
  },
  {
    id: 5,
    title: 'Заголовок статьи 21',
    content: 'Содержимое статьи 2',
  },
  {
    id: 6,
    title: 'Заголовок статьи 31',
    content: 'Содержимое статьи 3',
  },
];

const Articles = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.section}>
      <RandomBlinks />
      <h1 data-aos="fade-right">Статьи</h1>
      <div className={styles.sliderContainer} data-aos="fade-left">
        <Slider ref={sliderRef} {...settings}>
          {articlesData.map((article) => (
            <>
              <div key={article.id} className={styles.slide}>
                <Image src={'/articleBg.png'} alt="article background" width={358} height={166} />
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <ButtonOneMin text="Подробнее" />
              </div>
            </>
          ))}
        </Slider>

        <ButtonTwo onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Articles;
