import React from 'react'
import styles from "./RunningLine.module.css"
const RunningLine = () => {

    // требуется донастройка скорости  строки

    const texts = ["w3s", "заказать проект"]
    function multiplyArray(arr: string[], multiplier: number): string[] {
        const multipliedArray: string[] = [];
        for (let i = 0; i < multiplier; i++) {
          multipliedArray.push(...arr);
        }
        return multipliedArray;
      }
  return (
    <div className={styles.container}>
        <div className={styles.marqueeInfinite}>
    <div>
        {multiplyArray(texts,20).map((text) =><h1>{text}</h1>)}
    </div>
</div>
    </div>
  )
}

export default RunningLine