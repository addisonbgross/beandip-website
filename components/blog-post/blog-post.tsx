import clsx from 'clsx';

import Link from 'next/link';

import Container from '../container/container';
import { Post } from '../../types';

import styles from './blogPost.module.css';

const BlogPost = (props: Post) => (
  <Container>
    <div className={clsx(styles.back, 'link')}>
      <Link href={`/`} className={styles.backArrow}>
        {'<- back'}
      </Link>
    </div>

    <h2>{props.title}</h2>

    <p className={styles.date}>{props.date}</p>

    <div className={styles.content}>{props.content}</div>

    <div className={styles.footer} />
  </Container>
);

export default BlogPost;
