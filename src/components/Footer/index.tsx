'use client';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './Footer.module.css';
import Image from 'next/image';
import RandomBlinks from '../Blinks';
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.bottomLinks} data-aos="fade-up">
        <ul className={styles.column1}>
          <li>
            <a href="#" className={styles.logo}>
              <Image
                src="/Logo1.png"
                alt="Web 3 Smart Developement Logo"
                width={199}
                height={137.4}
                priority
              />
            </a>
          </li>
          <li>
            <span>мы разрабатываем продукты, которые работают</span>
          </li>
        </ul>
        <ul className={styles.column2}>
          <li>
            <h2>О нас</h2>
          </li>
          <li>
            <a href="#" className={styles.link}>
              О компании
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Кейсы
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Технологии
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              блог
            </a>
          </li>
        </ul>
        <ul className={styles.column3}>
          <li>
            <h2>Услуги</h2>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Разработка веб-приложений
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Разработка сайтов
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Мобильные приложения
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Смарт-контракты
            </a>
          </li>
        </ul>
        <ul className={styles.column4}>
          <li>
            <h2>Контакты</h2>
          </li>
          <li>
            <a href="mailto:support@web3smart.com" className={styles.link}>
              support@web3smart.com
            </a>
          </li>
          <li>
            <a href="tel:+79990007777" className={styles.link}>
              +7 (999) 000-77-77
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Москва
            </a>
          </li>
        </ul>
        <ul className={styles.column5}>
          <li>
            <a href="#" className={styles.up}>
              <Image
                src="/ArrowUp.png"
                alt="Web 3 Smart Developement Logo"
                width={59}
                height={68}
                priority
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.socialMediaLinks} data-aos="fade-up">
        <a href="#">VK</a>
        <a href="#">Twitter</a>
        <a href="#">Github</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
