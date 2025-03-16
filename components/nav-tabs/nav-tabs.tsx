import { Tabs } from '../../types';
import LinkButton from '../link-button/link-button.tsx';

export interface NavTabsProps {
  tab: number;
  latestBlogPostLink: string;
}

const NavTabs = ({ tab, latestBlogPostLink }: NavTabsProps) => (
  <div className="flex space-x-4 mt-2">
    <LinkButton
      text="Blog"
      link={latestBlogPostLink}
      isActive={tab === Tabs.Blog}
    />
    <LinkButton text="About" link="/about" isActive={tab === Tabs.About} />
  </div>
);

export default NavTabs;
