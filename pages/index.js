import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { createUseStyles } from 'react-jss';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    padding: '0 2rem',
    backgroundColor: '#EEE',
  },
});

export default function Home() {
  const classes = useStyles();
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();

  return (
    <JssProvider registry={registry} generateId={generateId}>
      <div className={classes.container}>
        <Head>
          <title>beandip games</title>
          <meta name="description" content="beandip games" />
          <link rel="icon" href="/bean.ico" />
        </Head>

        <main className={styles.main}>
          <p className={styles.description}>beandip</p>
        </main>
      </div>
    </JssProvider>
  );
}
