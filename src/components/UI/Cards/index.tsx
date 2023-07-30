'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './Cards.module.css';

const Cards: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = Array.from(
        document.getElementsByClassName(styles.card) as HTMLCollectionOf<HTMLElement>,
      );
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const cardsElement = document.getElementById('cards');
    if (cardsElement) {
      cardsElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div id="cards" className={styles.cards}>
        <div className={styles.card} data-aos="fade-up-right">
          <div className={styles.cardContent}>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-apartment"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Опытная команда</h3>
                  <h4>
                    Наша команда разработчиков имеет обширный опыт в разработке web3, включая
                    разработку смарт-контрактов, создание децентрализованных приложений (dApps) и
                    интеграцию решений на базе блокчейна. Мы привносим свои знания и опыт в каждый
                    проект, над которым работаем, и стремимся к достижению высококачественных
                    результатов.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card} data-aos="fade-down">
          <div className={styles.cardContent}>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-unicorn"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Прозрачный процесс разработки</h3>
                  <h4>
                    Мы верим в тесное сотрудничество с нашими клиентами, чтобы гарантировать полное
                    воплощение их идей. Мы поддерживаем прозрачный процесс разработки, предоставляя
                    регулярные обновления о ходе проекта и запрашивая обратную связь от наших
                    клиентов на каждом этапе разработки.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card} data-aos="fade-up-left">
          <div className={styles.cardContent}>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-blender-phone"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Конкурентоспособная цена</h3>
                  <h4>
                    Мы предлагаем конкурентоспособную ценовую политику для наших услуг по разработке
                    web3, не ущемляя при этом качество. Мы работаем с клиентами всех размеров и
                    бюджетов, и мы стремимся предоставлять соответствующую стоимость услуг.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card} data-aos="fade-up-right">
          <div className={styles.cardContent}>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-person-to-portal"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Современные технологии</h3>
                  <h4>
                    Мы следим за последними технологиями и инструментами в сфере разработки web3, и
                    мы используем эти технологии для создания инновационных решений для наших
                    клиентов.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card} data-aos="fade-up">
          <div className={styles.cardContent}>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-person-from-portal"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Высокий уровень сервиса</h3>
                  <h4>
                    Мы обязуемся предоставлять отличный сервис нашим клиентам. Мы уделяем время на
                    понимание потребностей наших клиентов и сотрудничаем с ними для разработки
                    индивидуальных решений, соответствующих их конкретным требованиям.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card} data-aos="fade-up-left">
          <div className={styles.cardContent}>
            <div className={styles.cardInfoWrapper}>
              <div className={styles.cardInfo}>
                <i className="fa-duotone fa-otter"></i>
                <div className={styles.cardInfoTitle}>
                  <h3>Бонус разработки с W3S</h3>
                  <h4>
                    После каждого завершенного проекта с Web3 Smart Development предлагаем
                    бесплатные часы разработки для следующего проекта. Долгосрочное сотрудничество с
                    нами — правильный выбор.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
