import Link from 'next/link';
import { Tabs } from '../../types.ts';

export interface NavTabsProps {
  tab: number;
  latestBlogPostLink: string;
}

const NavTabs = ({ tab, latestBlogPostLink }: NavTabsProps) => (
  <div className="flex space-x-4 mt-1">
    <Link
      passHref
      href={latestBlogPostLink}
      className={tab === Tabs.Blog ? 'active-link' : ''}
    >
      {'Blog'}
    </Link>
    <Link
      passHref
      href={'/about'}
      className={tab === Tabs.About ? 'active-link' : ''}
    >
      {'About'}
    </Link>
  </div>
);

export default NavTabs;
