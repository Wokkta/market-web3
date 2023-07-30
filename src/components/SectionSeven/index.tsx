'use client';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './SectionSeven.module.css';

import ImageSwitcher from '../UI/ImageSwitcher';
import RandomBlinks from '../Blinks';

interface Platform {
  platform: number;
  width: number;
  height: number;

  isHovered: boolean;
}

interface Technology {
  tech: number;
  width: number;
  height: number;

  isHovered: boolean;
}

const SectionSeven = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  useEffect(() => {
    const initialPlatforms: Platform[] = [
      { platform: 1, width: 56, height: 91, isHovered: false },
      { platform: 2, width: 91, height: 91, isHovered: false },
      { platform: 3, width: 61, height: 91, isHovered: false },
      { platform: 4, width: 91, height: 91, isHovered: false },
      { platform: 5, width: 91, height: 91, isHovered: false },
      { platform: 6, width: 102, height: 91, isHovered: false },
      { platform: 7, width: 116, height: 91, isHovered: false },
      { platform: 8, width: 87, height: 91, isHovered: false },
      { platform: 9, width: 98.5, height: 91, isHovered: false },
    ];

    setPlatforms(initialPlatforms);
    const initialTechnologies: Technology[] = [
      { tech: 1, width: 81.63, height: 87.37, isHovered: false },
      { tech: 2, width: 123, height: 88, isHovered: false },
      { tech: 3, width: 87, height: 88, isHovered: false },
      { tech: 4, width: 116.5, height: 87.38, isHovered: false },
      { tech: 5, width: 88, height: 88, isHovered: false },
      { tech: 6, width: 152, height: 88, isHovered: false },
      { tech: 7, width: 88, height: 87, isHovered: false },
      { tech: 8, width: 102.26, height: 87.64, isHovered: false },
      { tech: 9, width: 87, height: 87, isHovered: false },
      { tech: 10, width: 81, height: 87, isHovered: false },
      { tech: 11, width: 86, height: 87, isHovered: false },
      { tech: 12, width: 77, height: 87, isHovered: false },
      { tech: 13, width: 129.3, height: 87.8, isHovered: false },
      { tech: 14, width: 84.5, height: 87.64, isHovered: false },
      { tech: 15, width: 98, height: 87, isHovered: false },
      { tech: 16, width: 87, height: 87, isHovered: false },
      { tech: 17, width: 76.67, height: 87.64, isHovered: false },
      { tech: 18, width: 57.35, height: 89, isHovered: false },
      { tech: 19, width: 79.13, height: 89, isHovered: false },
      { tech: 20, width: 87, height: 89, isHovered: false },
      { tech: 21, width: 69, height: 89, isHovered: false },
      { tech: 22, width: 91, height: 91, isHovered: false },
      { tech: 23, width: 83.14, height: 91, isHovered: false },
      { tech: 24, width: 42, height: 91, isHovered: false },
      { tech: 25, width: 91, height: 91, isHovered: false },
      { tech: 26, width: 118, height: 91, isHovered: false },
      { tech: 27, width: 128, height: 77, isHovered: false },
      { tech: 28, width: 108, height: 91, isHovered: false },
    ];
    setTechnologies(initialTechnologies);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  const handlePlatformMouseEnter = (platformIndex: number) => {
    setPlatforms((prevPlatforms) => {
      const updatedPlatforms = [...prevPlatforms];
      updatedPlatforms[platformIndex].isHovered = true;
      return updatedPlatforms;
    });
  };

  const handlePlatformMouseLeave = (platformIndex: number) => {
    setPlatforms((prevPlatforms) => {
      const updatedPlatforms = [...prevPlatforms];
      updatedPlatforms[platformIndex].isHovered = false;
      return updatedPlatforms;
    });
  };

  const handleTechnologyMouseEnter = (technologyIndex: number) => {
    setTechnologies((prevTechnologies) => {
      const updatedTechnologies = [...prevTechnologies];
      updatedTechnologies[technologyIndex].isHovered = true;
      return updatedTechnologies;
    });
  };

  const handleTechnologyMouseLeave = (technologyIndex: number) => {
    setTechnologies((prevTechnologies) => {
      const updatedTechnologies = [...prevTechnologies];
      updatedTechnologies[technologyIndex].isHovered = false;
      return updatedTechnologies;
    });
  };

  return (
    <div className={styles.section}>
      <RandomBlinks />
      <div className={styles.infoBlock} data-aos="fade-left">
        <h1>Наши Blockchain платформы</h1>
        <div className={styles.icons} data-aos="zoom-out-right">
          {platforms.map((platform, index) => (
            <div
              key={platform.platform}
              onMouseEnter={() => handlePlatformMouseEnter(index)}
              onMouseLeave={() => handlePlatformMouseLeave(index)}>
              <ImageSwitcher
                src={`/platforms/${platform.platform}.png`}
                hoverSrc={`/platforms/${((platform.platform + 1) % 7) + 1}.png`}
                alt="platform image"
                width={platform.width}
                height={platform.height}
                isHovered={platform.isHovered}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.infoBlock} data-aos="zoom-out-right">
        <h1 data-aos="fade-left">Наши технологии</h1>
        <div className={styles.icons}>
          {technologies.map((technology, index) => (
            <div
              onMouseEnter={() => handleTechnologyMouseEnter(index)}
              onMouseLeave={() => handleTechnologyMouseLeave(index)}
              key={technology.tech}>
              <ImageSwitcher
                src={`/technologies/${technology.tech}.png`}
                hoverSrc={`/technologies/${((technology.tech + 1) % 20) + 1}.png`}
                alt="technology image"
                width={technology.width}
                height={technology.height}
                isHovered={technology.isHovered}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
