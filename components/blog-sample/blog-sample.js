import Image from 'next/image';
import Link from 'next/link';

import { ThumbnailBlur } from '../../constants.js';

import styles from './blogSample.module.css';

const BlogSample = ({ page, thumbnail, title, date, text }) => (
  <Link href={`/blog/${page}`} passHref>
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.thumbnail}
          src={thumbnail}
          placeholder="blur"
          blurDataURL={ThumbnailBlur}
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
