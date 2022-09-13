import Image from 'next/image';

import styles from './blogImage.module.css';

const BlogImage = ({ image, imageBlur, alt }) => (
  <div className={styles.blogImage}>
    <Image
      src={image}
      blurDataURL={imageBlur}
      alt={alt}
      placeholder="blur"
      width="552"
      height="552"
      layout="intrinsic"
    />
  </div>
);

export default BlogImage;
