import React, { useState } from 'react';
import Image from 'next/image';

import About from '../components/about/about';
import BlogSample from '../components/blog-sample/blog-sample';
import NavTabs from '../components/nav-tabs/nav-tabs';

import { TABS } from '../constants.js';
import styles from '../styles/Index.module.css';

const Index = ({ blogs }) => {
  const [currentTab, setCurrentTab] = useState(TABS.Blog);

  const handleOnChangeTab = (tab) => setCurrentTab(tab);

  return (
    <div className="background">
      <main className="main">
        <div className={styles.header}>
          <h1 className={styles.title}>beandip</h1>
          <Image
            src="/images/logo.png"
            width="64"
            height="64"
            layout="intrinsic"
            alt="beandip logo"
          />
        </div>

        <NavTabs tab={currentTab} onChange={handleOnChangeTab} />

        {currentTab === TABS.Blog &&
          blogs.map((b) => <BlogSample key={b.page} {...b} />)}

        {currentTab === TABS.About && <About />}
      </main>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  console.log(query);
  return {
    props: {
      blogs: [
        {
          page: 'first',
          thumbnail: '/thumbnails/thumbnail.png',
          title: 'First Post',
          date: 'September 1st, 2022',
          text: `You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for murder...`,
        },
        {
          page: 'first',
          thumbnail: '/thumbnails/thumbnail.png',
          title: 'First Post',
          date: 'September 1st, 2022',
          text: `You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for murder...`,
        },
        {
          page: 'first',
          thumbnail: '/thumbnails/thumbnail.png',
          title: 'First Post',
          date: 'September 1st, 2022',
          text: `You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for murder...`,
        },
        {
          page: 'first',
          thumbnail: '/thumbnails/thumbnail.png',
          title: 'First Post',
          date: 'September 1st, 2022',
          text: `You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for murder...`,
        },
      ],
    },
  };
}

export default Index;
