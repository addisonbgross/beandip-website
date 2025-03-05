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

const BlogImage = ({ image, caption, alt, height = 552, width = 552 }: BlogImageProps) => (
  <div className={styles.blogImage}>
    <Image
      src={image}
      blurDataURL={ImageBlur}
      alt={alt}
      placeholder="blur"
      width={width}
      height={height}
      style={{ margin: '0 auto' }}
    />
    <p style={{ width: '500px' }}>
      <i>{caption}</i>
    </p>
  </div>
);

export default BlogImage;
