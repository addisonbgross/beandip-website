import React, { useState } from 'react';
import Image from 'next/image';

import About from '../components/about/about';
import BlogSample from '../components/blog-sample/blog-sample';
import Container from '../components/container/container';
import NavTabs from '../components/nav-tabs/nav-tabs';
import Social from '../components/social/social';

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
              alt="beandip logo"
            />
          </div>
          <h1 className={styles.title}>beandip games</h1>
        </>

        <div className={styles.tabsSocial}>
          <NavTabs tab={currentTab} onChange={handleOnChangeTab} />
          <Social />
        </div>
      </div>

      {currentTab === TABS.Blog &&
        blogs.map((b) => <BlogSample key={b.page} {...b} />)}

      {currentTab === TABS.About && <About />}
    </Container>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      blogs: [
        {
          page: 'someone-could-fit-through-that-window',
          thumbnail: '/thumbnails/someone-could-fit.png',
          title:
            'Someone could fit through that window. A small person. An attack child',
          date: 'May 17th, 2023',
          text: `Read about how we created an underground mine environment without crying.`,
        },
        {
          page: 'im-worried',
          thumbnail: '/thumbnails/im-worried.png',
          title: 'I’m worried the baby thinks people can’t change',
          date: 'April 19th, 2023',
          text: `A quick recap of what we've done in the last eight months since starting.`,
        },
        {
          page: 'unlimited-juice',
          thumbnail: '/thumbnails/unlimited-juice.png',
          title: 'There’s unlimited juice? This party is gonna be off the hook',
          date: 'April 5th, 2023',
          text: `No RPG would be complete without a skill tree. This post discusses our use and implementation of a skill system.`,
        },
        {
          page: 'cats-do-not-abide-by-the-laws-of-nature',
          thumbnail: '/thumbnails/cats-do-not-abide-by-the-laws-of-nature.png',
          title: 'Cats Do Not Abide By The Laws Of Nature',
          date: 'March 9th, 2023',
          text: `Check out the chaotic and satisfying fun that physics can add to a game.`,
        },
        {
          page: 'airing-of-grievances',
          thumbnail: '/thumbnails/airing-of-grievances.png',
          title: 'Airing Of Grievances',
          date: 'February 23rd, 2023',
          text: `Join us in reliving some frustrating yet educational implementation and performance challenges.`,
        },
        {
          page: 'my-mind-is-going-a-mile-an-hour-2',
          thumbnail: '/thumbnails/my-mind-is-going-a-mile-an-hour-2.png',
          title: 'My Mind Is Going A Mile An Hour (Part 2)',
          date: 'February 8th, 2023',
          text: `Part two of sharing our AI strategies. Read about how our unit AI connects with their animation.`,
        },
        {
          page: 'my-mind-is-going-a-mile-an-hour-1',
          thumbnail: '/thumbnails/my-mind-is-going-a-mile-an-hour-1.png',
          title: 'My Mind Is Going A Mile An Hour (Part 1)',
          date: 'January 26th, 2023',
          text: `The first of a two-part post about our AI system. Probably the most challenging aspect of our game to program. It's always a work in progress.`,
        },
        {
          page: 'ready-to-work',
          thumbnail: '/thumbnails/ready-to-work.png',
          title: 'Ready To Work',
          date: 'January 11th, 2023',
          text: `Not much to say aside from Happy New year!`,
        },
        {
          page: 'just-mow-a-lawn',
          thumbnail: '/thumbnails/just-mow-a-lawn.png',
          title: 'Why Would Anyone Do Drugs When They Could Just Mow A Lawn?',
          date: 'December 1st, 2022',
          text: `To create rich environments, we've put together a collection of foliage for our first biome. Check out our techniques for making our plants performant and beautiful.`,
        },
        {
          page: 'what-are-you-doing',
          thumbnail: '/thumbnails/what-are-you-doing-levels.png',
          title: 'What are you doing? Levels',
          date: 'November 16th, 2022',
          text: `More aspects of the game state can be saved now. Read about the successes and sadness we encountered.`,
        },
        {
          page: 'wanted-to-pretend-i-was-an-architect',
          thumbnail: '/thumbnails/wanted-to-be-an-architect.png',
          title: 'You know I always wanted to pretend I was an architect',
          date: 'November 2nd, 2022',
          text: `Take a look at the current state of how our game's components and concepts are structured.`,
        },
        {
          page: 'i-havent-even-begun-to-peak',
          thumbnail: '/thumbnails/i-havent-even-begun-to-peak.png',
          title: 'Let me tell you something. I haven’t even begun to peak',
          date: 'October 20th, 2022',
          text: `We're working hard on our application for an Epic Megagrant. Here's a short update on some new features!.`,
        },
        {
          page: 'once-you-unplug-the-machine',
          thumbnail: '/thumbnails/once-you-unplug-the-machine.png',
          title: 'Once You Unplug The Machine, All The Scores Will Be Erased',
          date: 'October 5th, 2022',
          text: `Ensuring our save game systems works when adding new features is an ongoing effort. Here's our current save/load process and how we plan to improve it in the future.`,
        },
        {
          page: 'bones-are-their-money',
          thumbnail: '/thumbnails/bones-are-their-money.png',
          title: 'Bones Are Their Money',
          date: 'September 22nd, 2022',
          text: `We’re replacing our placeholder characters with new skeletal meshes. Read to see how we integrated the new assets, and some of the challenges that we met.`,
        },
        {
          page: 'prestige-worldwide',
          thumbnail: '/thumbnails/prestige-worldwide.png',
          title: 'Prestige Worldwide',
          date: 'September 14th, 2022',
          text: `It can be tricky to consicely explain a game concept you have in your head. Read about how we're working too improve how we explain our premise and gameplay.`,
        },
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
