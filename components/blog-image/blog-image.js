import Image from 'next/image';

import styles from './blogImage.module.css';

const BlogImage = ({ image, imageBlur, alt, height = 552, width = 552 }) => (
  <div className={styles.blogImage}>
    <Image
      src={image}
      blurDataURL={imageBlur}
      alt={alt}
      placeholder="blur"
      width={width}
      height={height}
      layout="intrinsic"
    />
  </div>
);

export default BlogImage;
