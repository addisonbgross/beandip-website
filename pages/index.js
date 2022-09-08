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
          page: 'game-on',
          thumbnail: '/thumbnails/game-on.png',
          title: 'Game On',
          date: 'September 7th, 2022',
          text: `Welcome to beandip games! Here's the first of many entires in our development blog.`,
        },
      ],
    },
  };
}

export default Index;
