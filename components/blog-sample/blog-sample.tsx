import Image from 'next/image';
import Link from 'next/link';

import { ImageBlur } from '../../constants';
import { PostSample } from '../../types';

import styles from './blogSample.module.css';

const BlogSample = (props: PostSample) => (
  <Link href={`/blog/${props.page}`} passHref>
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.thumbnail}
          src={props.thumbnail}
          placeholder="blur"
          blurDataURL={ImageBlur}
          width="80"
          height="80"
          alt={props.title}
        />
      </div>

      <div className={styles.sample}>
        <div className={styles.header}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.date}>{props.date}</p>
        </div>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  </Link>
);

export default BlogSample;
