'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Blinks.module.css';

interface RandomImage {
  id: number;
  type: number;
  top: number;
  left: number;
  width: number;
  height: number;
}

const RandomBlinks: React.FC = () => {
  const [images, setImages] = useState<RandomImage[]>([]);

  useEffect(() => {
    const frequencies: number[] = [3, 60, 13]; // Частоты для разных типов изображений

    const types: number[] = [1, 2, 3];
    const getParams = (type: number) => {
      switch (type) {
        case 1:
          return [1685.4, 889.71];

        case 2:
          const temp = Math.floor(Math.random() * (41 - 31 + 1) + 31);
          return [temp, temp];
        case 3:
          return [783.92, 521.92];
        default:
          return [200, 200];
      }
    };
    const generateRandomBlinks = () => {
      const newImages: RandomImage[] = [];

      for (let n = 0; n < types.length; n++) {
        for (let i = 0; i < Math.floor(Math.random() * (frequencies[n] + 1) + 1); i++) {
          const Type: number = types[n];
          const Top: number = Math.floor(Math.random() * window.innerHeight * 0.5); // Случайное значение для top

          const middlePointX = window.innerWidth / 2; // Середина экрана по оси X
          const marginX = 0; // Отступ от середины по оси X, где изображения могут появляться

          let Left: number;

          Left = Math.floor(Math.random() * (middlePointX - marginX));

          const image: RandomImage = {
            id: Math.random(),
            type: Type,
            top: Top,
            left: Left,
            width: getParams(Type)[0],
            height: getParams(Type)[1],
          };
          newImages.push(image);
        }
      }
      setImages(newImages);
    };

    generateRandomBlinks();
  }, []);

  return (
    <>
      {images.map((image) =>
        image.type != 2 ? (
          <Image
            data-aos="none"
            key={image.id}
            src={`/blicks/${image.type}.png`}
            alt="Blink Image"
            width={image.width}
            height={image.height}
            style={{
              position: 'absolute',
              top: `${image.top}px`,
              left: `${image.left}px`,
              zIndex: 2,
            }}
          />
        ) : (
          <></>
        ),
      )}
      {images
        .filter((image) => image.type === 2)
        .map((image) => (
          <div
            className={styles.lilBlink}
            data-aos="none"
            style={{
              position: 'absolute',
              top: `${image.top}px`,
              left: `${image.left}px`,
              zIndex: 2,
            }}></div>
        ))}
    </>
  );
};

export default RandomBlinks;
