import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavTabs from '../components/nav-tabs/nav-tabs';

import { TABS } from '../constants.js';
import styles from '../styles/Index.module.css';

export default function Index({ blogs, news }) {
  const [currentTab, setCurrentTab] = useState(TABS.News);

  const router = useRouter();
  console.log(router.query);

  const handleOnChangeTab = (tab) => setCurrentTab(tab);

  return (
    <div>
      <Head>
        <title>beandip games</title>
        <meta name="description" content="beandip games" />
        <link rel="icon" href="/bean.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>beandip</h1>

        <NavTabs tab={currentTab} onChange={handleOnChangeTab} />

        {currentTab === TABS.Blog &&
          blogs.map((b) => (
            <div key={b.page} className={styles.sample}>
              {b.sample}
              <Link href={`/blog/${b.page}`}>Read more</Link>
            </div>
          ))}

        {currentTab === TABS.News &&
          news.map((n) => (
            <div key={n.page} className={styles.sample}>
              {n.sample}
              <Link href={`/news/${n.page}`}>Read more</Link>
            </div>
          ))}
      </main>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query);
  return {
    props: {
      blogs: [
        {
          page: 'first',
          sample: `You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for murder.
          After the avalanche, it took us a week to climb out...  `,
        },
        {
          page: 'second',
          sample: `Look, just because I don’t be givin’ no man a foot massage don’t make it
          right for Marsellus to throw Antwone into a glass motherfuckin’ house...  `,
        },
        {
          page: 'third',
          sample: `The path of the righteous man is beset on all sides by the iniquities of
          the selfish and the tyranny of evil men. Blessed is he who, in the name of
          charity and good will, shepherds the weak through the valley...  `,
        },
      ],
      news: [
        {
          page: 'first',
          sample: `Now that we know who you are, I know who I am. I’m not a mistake! It all
          makes sense! In a comic, you know how you can tell who the arch-villain’s...  `,
        },
      ],
    },
  };
}
