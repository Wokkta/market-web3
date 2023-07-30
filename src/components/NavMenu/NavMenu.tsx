'use client'; // This is a client component
//import { useTranslation } from "react-i18next";
import Image from 'next/image';
import LangaugePopup from '../LanguagePopup/LanguagePopup';
import styles from './NavMenu.module.css';
//github.com/i18next/next-i18next
//nextjs.org/docs/pages/building-your-application/optimizing/images
//nextjs.org/learn/basics/assets-metadata-css/metadata
//react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
type NavMenuProps = {};

export const NavMenu = ({}: NavMenuProps) => {
  //const { t } = useTranslation();
  const menuItems = ['о нас', 'услуги', 'кейсы', 'технологии', 'тарифы', 'контакты'];
  return (
    <div className={styles.NavMenu}>
      <Image src="/logo.png" alt="Web 3 Smart Developement Logo" width={100} height={70} priority />
      <nav>
        {menuItems.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </nav>
      <LangaugePopup />
    </div>
  );
};
