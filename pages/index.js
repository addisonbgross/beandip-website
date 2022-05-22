import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>beandip games</title>
        <meta name="description" content="beandip games" />
        <link rel="icon" href="/bean.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
          beandip
        </p>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
