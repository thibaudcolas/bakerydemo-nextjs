import Image from 'next/image';

export interface ImageBlockType {
  id: string;
  blockType: 'ImageBlock';
  image: {
    src: {
      url: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  caption: string;
  attribution: string;
}

export default function ImageBlock({ block }: { block: ImageBlockType }) {
  const { src } = block.image;

  return (
    <figure>
      <Image
        src={src.url}
        alt={src.alt}
        width={src.width}
        height={src.height}
        loading="lazy"
      />
      <figcaption>
        {block.caption} - {block.attribution}
      </figcaption>
    </figure>
  );
}
