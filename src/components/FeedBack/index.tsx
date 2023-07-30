'use client';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './FeedBack.module.css';
import ButtonOne from '../UI/Buttons/ButtonOne';
import InputOne from '../UI/Inputs/InputOne';
import InputWithFile from '../UI/Inputs/InputWithFile';
import SelectOne from '../UI/Selects/SelectOne';
import Image from 'next/image';
import RandomBlinks from '../Blinks';
const FeedBack = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.section}>
      <RandomBlinks />
      <h3 data-aos="fade-left">Расскажите нам о своем проекте</h3>
      <h1 data-aos="fade-left">Мы на связи</h1>
      <div className={styles.content} data-aos="fade-left">
        <DropdownForm data-aos="fade-left" />
        <Image
          src={'/FeedBackImg.png'}
          width={683}
          height={683}
          alt="image for buity"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
};

export default FeedBack;

const DropdownForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleContactMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContactMethod(e.target.value);
  };

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1Value(e.target.value);
  };
  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2Value(e.target.value);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // логику обработки отправки формы здесь

    setCategory('');
    setContactMethod('');
    setInput1Value('');
    setInput2Value('');
    setSelectedFile(null);
    setSelectedOption('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="category" className={styles.labels}>
          Категория:
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className={styles.dropdownOne}
          style={{ marginRight: '40px' }}>
          <option value="Смарт-контракт">Смарт-контракт</option>
          <option value="Приложение">Приложение</option>
          <option value="Другое">Другое</option>
        </select>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

          textAlign: 'center',
        }}>
        <label htmlFor="inputValue" className={styles.labels}>
          Имя
        </label>
        <InputOne
          placeholder="имя"
          handleChange={handleInput1Change}
          value={input1Value}
          width={244}
          height={50}
        />
      </div>
      <div>
        <label htmlFor="contactMethod" className={styles.labels}>
          Способ связи:
        </label>
        <select
          id="contactMethod"
          value={contactMethod}
          onChange={handleContactMethodChange}
          className={styles.dropdownTwo}>
          <option value="">способ связи</option>
          <option value="телефон">Телефон</option>
          <option value="телеграм">Телеграм</option>
          <option value="почта">Почта</option>
        </select>
      </div>

      <div>
        <label htmlFor="inputValue" className={styles.labels}>
          О вашем проекте и сроках
        </label>
        <InputOne
          placeholder="О вашем проекте и сроках"
          handleChange={handleInput2Change}
          value={input2Value}
          width={480}
          height={50}
        />
      </div>
      <InputWithFile onFileChange={handleFileChange} />
      <SelectOne />
      <span>
        отправляя данные вы соглашаетесь с политикой конфиденциальности и обработки данных
      </span>
      <ButtonOne text={'Отправить запрос'} />
    </form>
  );
};
