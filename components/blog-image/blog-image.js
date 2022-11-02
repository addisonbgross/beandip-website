import Image from 'next/image';

import { BlogImageBlur } from '../../constants.js';

import styles from './blogImage.module.css';

const BlogImage = ({ image, caption, alt, height = 552, width = 552 }) => (
  <div className={styles.blogImage}>
    <Image
      src={image}
      blurDataURL={BlogImageBlur}
      alt={alt}
      objectFit="contain"
      placeholder="blur"
      width={width}
      height={height}
      layout="responsive"
    />
    <p>
      <i>{caption}</i>
    </p>
  </div>
);

export default BlogImage;
