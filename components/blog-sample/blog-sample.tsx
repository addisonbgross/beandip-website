import Image from 'next/image';
import Link from 'next/link';

import { ImageBlur } from '../../constants.ts';

import styles from './blogSample.module.css';

const BlogSample: React.FC<{ page: string, thumbnail: string, title: string, date: string, text: string }> = ({
  page, thumbnail, title, date, text
}): React.ReactElement => (
  <Link href={`/blog/${page}`} passHref>
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.thumbnail}
          src={thumbnail}
          placeholder="blur"
          blurDataURL={ImageBlur}
          width="80"
          height="80"
          alt={title}
        />
      </div>

      <div className={styles.sample}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  </Link>
);

export default BlogSample;
