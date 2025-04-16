'use client';

import resolveConfig from 'tailwindcss/resolveConfig';
import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';

import About from '../components/about/about';
import NavTabs from '../components/nav-tabs/nav-tabs';
import Social from '../components/social/social';

import { Tabs } from '../types.ts';
import DateNav from '../components/date-nav/date-nav.tsx';
import { useRouter } from 'next/navigation';
import DirectionNav from '../components/direction-nav/direction-nav.tsx';
import BlogIndex from '../components/blog-index/blog-index.tsx';
import tailwindConfig from '../tailwind.config.js';

const posts = [
  {
    page: 'someone-could-fit-through-that-window',
    date: 'May 17th, 2023',
  },
  {
    page: 'im-worried',
    date: 'April 19th, 2023',
  },
  {
    page: 'unlimited-juice',
    date: 'April 5th, 2023',
  },
  {
    page: 'cats-do-not-abide-by-the-laws-of-nature',
    date: 'March 9th, 2023',
  },
  {
    page: 'airing-of-grievances',
    date: 'February 23rd, 2023',
  },
  {
    page: 'my-mind-is-going-a-mile-an-hour-2',
    date: 'February 8th, 2023',
  },
  {
    page: 'my-mind-is-going-a-mile-an-hour-1',
    date: 'January 26th, 2023',
  },
  {
    page: 'ready-to-work',
    date: 'January 11th, 2023',
  },
  {
    page: 'just-mow-a-lawn',
    date: 'December 1st, 2022',
  },
  {
    page: 'what-are-you-doing',
    date: 'November 16th, 2022',
  },
  {
    page: 'wanted-to-pretend-i-was-an-architect',
    date: 'November 2nd, 2022',
  },
  {
    page: 'i-havent-even-begun-to-peak',
    date: 'October 20th, 2022',
  },
  {
    page: 'once-you-unplug-the-machine',
    date: 'October 5th, 2022',
  },
  {
    page: 'bones-are-their-money',
    date: 'September 22nd, 2022',
  },
  {
    page: 'prestige-worldwide',
    date: 'September 14th, 2022',
  },
  {
    page: 'game-on',
    date: 'September 7th, 2022',
  },
];

const latestBlogPostLink = `/blog/${posts[0].page}`;

const Home = ({ currentTab = Tabs.Blog, currentPost, currentPage }: any) => {
  const router = useRouter();
  const styleConfig = resolveConfig(tailwindConfig);
  const [isShowingBlogIndex, setIsShowingBlogIndex] = React.useState(false);

  // show the latest blog post by default
  useEffect(() => {
    if (!currentPost && currentTab === Tabs.Blog) {
      router.push(latestBlogPostLink);
    }
  }, [currentTab, currentPost, router]);

  // prevent the mobile blog post index from showing on large screens
  useEffect(() => {
    const handleResize = () => {
      const lgWidth = parseInt(styleConfig.theme.screens.lg);
      if (window.innerWidth > lgWidth) {
        setIsShowingBlogIndex(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsShowingBlogIndex]);

  const currentPostIndex = useMemo(
    () => posts.findIndex((post) => post.page === currentPage),
    [currentPage]
  );

  return (
    <div className="lg:grid lg:grid-cols-4">
      <div className="lg:block hidden mt-7 max-h-screen space-y-4 ml-auto">
        {currentTab === Tabs.Blog && (
          <div className="flex flex-col">
            <div className="ml-5 mb-9">
              <Social />
            </div>
            <DateNav posts={posts} currentRoute={currentPage} />
          </div>
        )}
      </div>

      <div className="flex flex-col mx-auto lg:col-span-2 w-full px-4 pt-4 max-h-screen">
        <div className="flex flex-wrap lg:justify-between items-center h-12 lg:h-16 mb-4 space-x-2">
          <div className="flex flex-nowrap items-center space-x-2">
            <Image
              priority
              src="/images/logo.svg"
              width="32"
              height="32"
              className="rounded-full object-cover my-3"
              alt="beandip games logo"
            />
            <h1 className="whitespace-nowrap m-1 text-xl lg:text-3xl">
              beandip games
            </h1>
          </div>

          <div className="flex flex-1 justify-end items-center">
            <NavTabs tab={currentTab} latestBlogPostLink={latestBlogPostLink} />
          </div>
        </div>

        <div className="h-screen overflow-y-auto pr-4 pb-20">
          <>
            {currentTab === Tabs.Blog && !isShowingBlogIndex && currentPost}
            {currentTab === Tabs.Blog && isShowingBlogIndex && (
              <div className="lg:hidden block">
                <BlogIndex
                  posts={posts}
                  closeBlogIndex={() => setIsShowingBlogIndex(false)}
                />
              </div>
            )}
            {currentTab === Tabs.About && (
              <div className="lg:w-[800px]">
                <About />
                <Social />
              </div>
            )}
          </>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-white lg:invisible">
          {currentTab === Tabs.Blog && !isShowingBlogIndex && (
            <DirectionNav
              prev={posts[currentPostIndex - 1]?.page}
              next={posts[currentPostIndex + 1]?.page}
              onShowBlogIndex={() => setIsShowingBlogIndex(true)}
            />
          )}
        </div>
      </div>

      <div className="pointer-events-none" />
    </div>
  );
};

export default Home;
