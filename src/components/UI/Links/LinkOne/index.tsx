'use client';
import { useState } from 'react';

import styles from './LinkOne.module.css';

interface LinkOneProps {
  text: string;
}

const LinkOne: React.FC<LinkOneProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <a
      className={styles.link}
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span>{props.text}</span>
    </a>
  );
};

export default LinkOne;
