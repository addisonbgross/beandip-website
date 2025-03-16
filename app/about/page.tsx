import Home from '../page.tsx';
import { Tabs } from '../../types.ts';

const Page = () => {
  return (
    <Home currentTab={Tabs.About} currentPost={<About />} currentPage="about" />
  );
};

const About = () => (
  <div>
    <p className="mt-0 mb-8">
      <strong>beandip games</strong> is a Canadian indie game studio currently
      working on its first game. We aim to create unique (and slightly weird)
      gaming experiences. Follow along with our development blog as we share our
      creation process in a holistic way.
    </p>
  </div>
);

export default Page;
