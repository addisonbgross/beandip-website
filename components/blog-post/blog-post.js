import clsx from 'clsx';

import Link from 'next/link';

import styles from '../../styles/BlogPost.module.css';

const BlogPost = ({ title, date, content }) => (
  <div className="background">
    <main className="main">
      <div className={clsx(styles.back, 'link')}>
        <Link href={`/`}>
          <a className={styles.backArrow}>{'<- back'}</a>
        </Link>
      </div>

      <h2>{title}</h2>

      <p className={styles.date}>{date}</p>

      {content}

      <div className={styles.footer} />
    </main>
  </div>
);

export default BlogPost;
