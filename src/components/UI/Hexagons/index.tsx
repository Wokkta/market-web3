import React from 'react';
import styles from './Hexagons.module.scss';

const HexagonGrid: React.FC = () => {
  const hexesPerRow = 2255; // Количество гексов в каждом ряду
  const rows = 1; // Количество рядов

  const renderHexagons = () => {
    const hexagons = [];

    for (let i = 0; i < rows; i++) {
      const hexagonRow = [];

      for (let j = 0; j < hexesPerRow; j++) {
        hexagonRow.push(<div className={styles.hexagon} key={j}></div>);
      }

      hexagons.push(
        <div className={styles.row} key={i}>
          {hexagonRow}
        </div>,
      );
    }

    return hexagons;
  };

  return (
    <div className={styles.cover}>
      <div className={styles.container}>{renderHexagons()}</div>
    </div>
  );
};

export default HexagonGrid;
