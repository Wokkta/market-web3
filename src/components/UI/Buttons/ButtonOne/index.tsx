'use client';
import { useState } from 'react';

import styles from './ButtonOne.module.css';

import ImageSwitcher from '../../ImageSwitcher';

interface ButtonOneProps {
  text: string;
}

const ButtonOne: React.FC<ButtonOneProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      className={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span>{props.text}</span>

      <div style={isHovered ? { paddingTop: '6px' } : {}}>
        <ImageSwitcher
          src="/Arrow1.png"
          hoverSrc="/Arrow2.png"
          alt="button arrow image"
          width={32}
          height={32}
          isHovered={isHovered}
        />
      </div>
    </button>
  );
};

export default ButtonOne;
