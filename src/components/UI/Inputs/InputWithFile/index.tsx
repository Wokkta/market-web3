import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import styles from './InputWithFile.module.css';
import attachmentIcon from './attachment-icon.png';
import ImageSwitcher from '../../ImageSwitcher';

interface InputWithFileProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputWithFile: React.FC<InputWithFileProps> = ({ onFileChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.inputWrapper}>
      <input type="file" id="file" onChange={onFileChange} className={styles.fileInput} />
      <label
        htmlFor="file"
        className={styles.label}
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}>
        <div className={styles.iconWrapper} onClick={() => console.log('Icon clicked')}>
          <ImageSwitcher
            src="/attach.png"
            alt="Attachment Icon"
            width={16}
            height={17}
            hoverSrc="/attach1.png"
            isHovered={isHovered}
          />
        </div>
        Добавить вложение
      </label>
    </div>
  );
};

export default InputWithFile;
