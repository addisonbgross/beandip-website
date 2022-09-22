import Image from 'next/image';

import styles from './blogImage.module.css';

const BlogImage = ({
  image,
  imageBlur,
  caption,
  alt,
  height = 552,
  width = 552,
}) => (
  <div className={styles.blogImage}>
    <Image
      src={image}
      blurDataURL={imageBlur}
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
