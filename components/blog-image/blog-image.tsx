import Image from 'next/image';

import { ImageBlur } from '../../constants.ts';

import styles from './blogImage.module.css';

export interface BlogImageProps {
  image: string;
  caption?: string;
  alt: string;
  height?: number;
  width?: number;
}

const BlogImage = ({
  image,
  caption,
  alt,
  height = 552,
  width = 552,
}: BlogImageProps) => (
  <div className={styles.blogImage}>
    <Image
      src={image}
      blurDataURL={ImageBlur}
      alt={alt}
      placeholder="blur"
      width={width}
      height={height}
      quality={100}
      className="mx-auto max-w-[100%] h-auto"
    />
    <p className="max-w-[500px]">
      <i>{caption}</i>
    </p>
  </div>
);

export default BlogImage;
