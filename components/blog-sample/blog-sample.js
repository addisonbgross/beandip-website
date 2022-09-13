import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/BlogSample.module.css';

const BlogSample = ({ page, thumbnail, thumbnailBlur, title, date, text }) => (
  <Link href={`/blog/${page}`} passHref>
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.thumbnail}
          src={thumbnail}
          placeholder="blur"
          blurDataURL={thumbnailBlur}
          width="80"
          height="80"
          layout="fixed"
          alt={title}
        />
      </div>

      <div className={styles.sample}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <p className={styles.date}>{date}</p>
        </div>
        {text}
      </div>
    </div>
  </Link>
);

export default BlogSample;
