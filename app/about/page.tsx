import React from 'react';
import HomeWrapper from '../page.tsx';
import { Tabs } from '../../types.ts';
import Social from '../../components/social/social.tsx';

const About = () => (
  <HomeWrapper
    tab={Tabs.About}
    route={'about'}
    content={
      <>
        <p className="mt-0 mb-8">
          <strong>beandip games</strong> is a Canadian indie game studio
          currently working on its first game. We aim to create unique (and
          slightly weird) gaming experiences. Follow along with our development
          blog as we share our creation process in a holistic way.
        </p>
        <div className="lg:invisible">
          <Social />
        </div>
      </>
    }
  />
);

export default About;
