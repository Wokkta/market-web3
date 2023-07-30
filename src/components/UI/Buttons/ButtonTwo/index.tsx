'use client';
import { useState, MouseEvent } from 'react';

import styles from './ButtonTwo.module.css';

import ImageSwitcher from '../../ImageSwitcher';

interface ButtonTwoProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonTwo: React.FC<ButtonTwoProps> = (props) => {
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
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick}>
      <div style={isHovered ? { paddingTop: '6px' } : {}}>
        <ImageSwitcher
          src="/Arrow1.png"
          hoverSrc="/Arrow2.png"
          alt="button arrow image"
          width={18}
          height={18}
          isHovered={isHovered}
        />
      </div>
    </button>
  );
};

export default ButtonTwo;
