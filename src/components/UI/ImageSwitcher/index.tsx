import Image from 'next/image';

interface ImageSwitcherProps {
  src: string;
  hoverSrc: string;
  width: number;
  height: number;
  alt: string;
  isHovered: boolean;
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  src,
  hoverSrc,
  alt,
  width,
  height,
  isHovered,
}) => {
  return (
    <div>
      {isHovered ? (
        <Image src={hoverSrc} alt={alt} width={width} height={height} />
      ) : (
        <Image src={src} alt={alt} width={width} height={height} />
      )}
    </div>
  );
};

export default ImageSwitcher;
