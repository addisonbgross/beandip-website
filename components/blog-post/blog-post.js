import clsx from 'clsx';

import Link from 'next/link';

import Container from '../container/container';

import styles from './blogPost.module.css';

const BlogPost = ({ title, date, content }) => (
  <Container>
    <div className={clsx(styles.back, 'link')}>
      <Link href={`/`}>
        <a className={styles.backArrow}>{'<- back'}</a>
      </Link>
    </div>

    <h2>{title}</h2>

    <p className={styles.date}>{date}</p>

    {content}

    <div className={styles.footer} />
  </Container>
);

export default BlogPost;
