import React, { useState } from 'react';
import Image from 'next/image';

import About from '../components/about/about';
import BlogSample from '../components/blog-sample/blog-sample';
import Container from '../components/container/container';
import NavTabs from '../components/nav-tabs/nav-tabs';

import { TABS } from '../constants.js';
import styles from '../styles/Index.module.css';

const Index = ({ blogs }) => {
  const [currentTab, setCurrentTab] = useState(TABS.Blog);

  const handleOnChangeTab = (tab) => setCurrentTab(tab);

  return (
    <Container>
      <div className={styles.header}>
        <>
          <div className={styles.logo}>
            <Image
              src="/images/logo.svg"
              width="48"
              height="48"
              layout="fixed"
              alt="beandip logo"
            />
          </div>
          <h1 className={styles.title}>beandip games</h1>
        </>

        <NavTabs tab={currentTab} onChange={handleOnChangeTab} />
      </div>

      {currentTab === TABS.Blog &&
        blogs.map((b) => <BlogSample key={b.page} {...b} />)}

      {currentTab === TABS.About && <About />}
    </Container>
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
          thumbnailBlur:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDWooorsOAKSiimAhpDS0hpgNNNNONMNUIYaYakNRtQMjao2qRqjagZE1RNUrVG1SxpETVGakamGpbKsMNJTiKSlcdjqc0ZpuaM1NyLC5opM0Zp3CwUhozSVVwsIaaacaaadwsNNMNPNMNFwsRtUbVI1MalcqxC1RsKlao2qWykiJhTCKkIphFS2UkRkUYpxFGKXMOx0OaM0zNGajmM7D80ZpmaXNPmCw7NJmkzSZquYLC0hozSGncLCGmGnGmmjmHYYajapDUZpcxSRG1RtUrVG1S5FJEZphp5ppqHIqwykxTqKnmHY2M0ZpmaM1HMZWJM0ZpmaM1SkFh+aM03NGapSHYdmkzSZpM0+YLCk000E00mncdhDTDTiaYTUuRVhrVGaeajNQ5FJDTTDTjTDWbkVYSiikzUc47GnmjNMzRmlzGNiTNGaZmjNUpBYkzRmmZozVpjsPzRmmZpM1dx2HE0hNNJpCaLjsKTTCaCaYTUtjsBNMJoJphNZtlJATTCaCaYTWE52KSFJpM03NGax52Oxo5pc0zNLmtkzAdmjNNzRmrQD80ZpmaM1ohj80maZmk3VaAeWppNNLU0tTGOLU0tTS1MLVLKHE0wtTS1MZqwm7DQpamk00mkzXM9Sh2aM0zNGaLAadFJRXRYwFzRmkpKtIBc0ZpuaQmtEhjiaaWppNNJq0hji1NLU0tTS1OwxxamFqaWphaoaGPLVGWppamFq5qg0PLUmaZupN1Z2C5JmjNR7qN1FgubNFFFdNjESkNKaaapIAJppNBpprRIYhNNJoJphNWkMCaYWoJqMmnYYpamFqQmmE1EkArNTN1IzUzNcs1qO4/dRuqPNGamwrj91G6o80Zp2Fc6KiiitiBDTTSmkNUgGmmGnGmmtEMYajNPNMarQxjVGxp7UxqoYwmoyaeaYaiQDGNMzTmptcktwEzRmikpEsXNGaSigR//2Q==',
          title: 'Game On',
          date: 'September 7th, 2022',
          text: `Welcome to beandip games! Here's the first of many entires in our development blog.`,
        },
      ],
    },
  };
}

export default Index;
