import clsx from 'clsx';

import Link from 'next/link';

import Container from '../container/container';

import styles from './blogPost.module.css';

const BlogPost: React.FC<{ title: string, date: string, content: any }> = ({
  title, date, content
}): React.ReactElement => (
  <Container>
    <div className={clsx(styles.back, 'link')}>
      <Link href={`/`} className={styles.backArrow}>
        {'<- back'}
      </Link>
    </div>

    <h2>{title}</h2>

    <p className={styles.date}>{date}</p>

    <div className={styles.content}>{content}</div>

    <div className={styles.footer} />
  </Container>
);

export default BlogPost;
